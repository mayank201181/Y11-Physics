import { NextResponse } from "next/server";
import {
  verifySecret,
  setSession,
  findAccountIdByName,
  getAccount,
} from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { familyName, password } = await req.json();
  if (!familyName || !password)
    return NextResponse.json({ error: "Enter your family name and password." }, { status: 400 });
  const id = await findAccountIdByName(familyName);
  if (!id) return NextResponse.json({ error: "No account with that family name." }, { status: 404 });
  const acc = await getAccount(id);
  if (!acc || !verifySecret(password, acc.passwordHash, acc.passwordSalt))
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  await setSession(acc.id);
  return NextResponse.json({ ok: true });
}
