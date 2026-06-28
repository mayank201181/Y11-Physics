import { NextResponse } from "next/server";
import {
  hashSecret,
  saveAccount,
  setSession,
  findAccountIdByName,
  indexAccountName,
  newId,
} from "@/lib/server/auth";
import type { Account } from "@/lib/profileTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { familyName, password, pin } = await req.json();
  if (!familyName || !password || !pin)
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  if (String(password).length < 6)
    return NextResponse.json({ error: "Password must be at least 6 characters." }, { status: 400 });
  if (!/^\d{4,6}$/.test(String(pin)))
    return NextResponse.json({ error: "PIN must be 4–6 digits." }, { status: 400 });

  const existing = await findAccountIdByName(familyName);
  if (existing)
    return NextResponse.json({ error: "That family name is already taken." }, { status: 409 });

  const pw = hashSecret(password);
  const pinH = hashSecret(String(pin));
  const acc: Account = {
    id: newId("acc"),
    familyName,
    passwordHash: pw.hash,
    passwordSalt: pw.salt,
    pinHash: pinH.hash,
    pinSalt: pinH.salt,
    createdAt: Date.now(),
    profiles: [],
  };
  await saveAccount(acc);
  await indexAccountName(familyName, acc.id);
  await setSession(acc.id);
  return NextResponse.json({ ok: true });
}
