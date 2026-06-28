import { NextResponse } from "next/server";
import { currentAccount } from "@/lib/server/auth";
import { readJson, writeJson } from "@/lib/server/blob";
import type { ProgressDoc } from "@/lib/profileTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const key = (accId: string, profId: string) => `progress/${accId}/${profId}.json`;

export async function GET(req: Request) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const profileId = new URL(req.url).searchParams.get("profileId");
  if (!profileId || !acc.profiles.some((p) => p.id === profileId))
    return NextResponse.json({ error: "Unknown profile." }, { status: 400 });
  const progress = await readJson<ProgressDoc>(key(acc.id, profileId));
  return NextResponse.json({ progress });
}

export async function POST(req: Request) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const { progress } = (await req.json()) as { progress: ProgressDoc };
  if (!progress?.profileId || !acc.profiles.some((p) => p.id === progress.profileId))
    return NextResponse.json({ error: "Unknown profile." }, { status: 400 });
  // Last-write-wins (client already merged the newer doc).
  await writeJson(key(acc.id, progress.profileId), progress);
  return NextResponse.json({ ok: true });
}
