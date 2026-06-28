import { scryptSync, randomBytes, timingSafeEqual, createHmac } from "crypto";
import { cookies } from "next/headers";
import { readJson, writeJson } from "./blob";
import type { Account } from "../profileTypes";

const COOKIE = "y11phys_session";
const SECRET = process.env.AUTH_SECRET || "dev-insecure-secret-change-me";

// ---- password / pin hashing (scrypt) ----
export function hashSecret(secret: string): { hash: string; salt: string } {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(secret, salt, 64).toString("hex");
  return { hash, salt };
}

export function verifySecret(secret: string, hash: string, salt: string): boolean {
  try {
    const candidate = scryptSync(secret, salt, 64);
    const known = Buffer.from(hash, "hex");
    return candidate.length === known.length && timingSafeEqual(candidate, known);
  } catch {
    return false;
  }
}

// ---- session token (HMAC-signed) ----
function sign(accountId: string): string {
  const payload = `${accountId}.${Date.now()}`;
  const sig = createHmac("sha256", SECRET).update(payload).digest("hex");
  return `${Buffer.from(payload).toString("base64url")}.${sig}`;
}

function verifyToken(token: string): string | null {
  try {
    const [b64, sig] = token.split(".");
    const payload = Buffer.from(b64, "base64url").toString();
    const expected = createHmac("sha256", SECRET).update(payload).digest("hex");
    if (
      sig.length !== expected.length ||
      !timingSafeEqual(Buffer.from(sig), Buffer.from(expected))
    )
      return null;
    return payload.split(".")[0];
  } catch {
    return null;
  }
}

export async function setSession(accountId: string): Promise<void> {
  const jar = await cookies();
  jar.set(COOKIE, sign(accountId), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 180,
  });
}

export async function clearSession(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export async function currentAccountId(): Promise<string | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (!token) return null;
  return verifyToken(token);
}

// ---- account storage ----
const accountKey = (id: string) => `accounts/${id}.json`;
const nameIndexKey = (name: string) =>
  `accounts/by-name/${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}.json`;

export async function getAccount(id: string): Promise<Account | null> {
  return readJson<Account>(accountKey(id));
}

export async function saveAccount(acc: Account): Promise<void> {
  await writeJson(accountKey(acc.id), acc);
}

export async function findAccountIdByName(name: string): Promise<string | null> {
  const idx = await readJson<{ id: string }>(nameIndexKey(name));
  return idx?.id || null;
}

export async function indexAccountName(name: string, id: string): Promise<void> {
  await writeJson(nameIndexKey(name), { id });
}

export async function currentAccount(): Promise<Account | null> {
  const id = await currentAccountId();
  if (!id) return null;
  return getAccount(id);
}

// Strip secrets before sending an account to the client.
export function publicAccount(acc: Account) {
  return {
    id: acc.id,
    familyName: acc.familyName,
    profiles: acc.profiles,
  };
}

export function newId(prefix: string): string {
  return `${prefix}_${randomBytes(9).toString("hex")}`;
}
