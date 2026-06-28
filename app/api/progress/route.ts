import { NextResponse } from "next/server";
import { currentAccountId } from "@/lib/server/auth";
import { readJson, writeJson } from "@/lib/server/blob";
import type { ProgressDoc } from "@/lib/profileTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const key = (accId: string, profId: string) => `progress/${accId}/${profId}.json`;
const safeId = (s: string) => /^[a-zA-Z0-9_-]+$/.test(s);

// Note: we validate via the session cookie (currentAccountId) rather than
// re-reading the account, because Vercel Blob has a ~60s read-after-write edge
// cache — a freshly-created profile may not appear in a re-read account for up
// to a minute. Progress is namespaced under the account id, so a client can
// only ever read/write its own data.

export async function GET(req: Request) {
  const accId = await currentAccountId();
  if (!accId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const profileId = new URL(req.url).searchParams.get("profileId");
  if (!profileId || !safeId(profileId))
    return NextResponse.json({ error: "Unknown profile." }, { status: 400 });
  const progress = await readJson<ProgressDoc>(key(accId, profileId));
  return NextResponse.json({ progress });
}

export async function POST(req: Request) {
  const accId = await currentAccountId();
  if (!accId) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const { progress } = (await req.json()) as { progress: ProgressDoc };
  if (!progress?.profileId || !safeId(progress.profileId))
    return NextResponse.json({ error: "Unknown profile." }, { status: 400 });
  await writeJson(key(accId, progress.profileId), progress);
  return NextResponse.json({ ok: true });
}
