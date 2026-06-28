import { NextResponse } from "next/server";
import { currentAccount, verifySecret } from "@/lib/server/auth";
import { readJson } from "@/lib/server/blob";
import type { ProgressDoc } from "@/lib/profileTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const { pin } = await req.json();
  if (!pin || !verifySecret(String(pin), acc.pinHash, acc.pinSalt))
    return NextResponse.json({ error: "Incorrect PIN." }, { status: 401 });

  const learners = [];
  for (const p of acc.profiles) {
    const progress = await readJson<ProgressDoc>(`progress/${acc.id}/${p.id}.json`);
    learners.push({ profile: p, progress });
  }
  return NextResponse.json({ learners });
}
