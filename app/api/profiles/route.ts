import { NextResponse } from "next/server";
import { currentAccount, saveAccount, publicAccount, newId } from "@/lib/server/auth";
import { deleteJson } from "@/lib/server/blob";
import type { Profile } from "@/lib/profileTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const { name, avatar } = await req.json();
  if (!name) return NextResponse.json({ error: "Name required." }, { status: 400 });
  if (acc.profiles.length >= 8)
    return NextResponse.json({ error: "Maximum 8 learners." }, { status: 400 });
  const prof: Profile = {
    id: newId("prof"),
    name: String(name).slice(0, 24),
    avatar: avatar || "🧑‍🎓",
    createdAt: Date.now(),
  };
  acc.profiles.push(prof);
  await saveAccount(acc);
  return NextResponse.json({ account: publicAccount(acc) });
}

export async function PATCH(req: Request) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const { id, name, avatar } = await req.json();
  const prof = acc.profiles.find((p) => p.id === id);
  if (!prof) return NextResponse.json({ error: "Profile not found." }, { status: 404 });
  if (name) prof.name = String(name).slice(0, 24);
  if (avatar) prof.avatar = avatar;
  await saveAccount(acc);
  return NextResponse.json({ account: publicAccount(acc) });
}

export async function DELETE(req: Request) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const { id } = await req.json();
  acc.profiles = acc.profiles.filter((p) => p.id !== id);
  await saveAccount(acc);
  await deleteJson(`progress/${acc.id}/${id}.json`);
  return NextResponse.json({ account: publicAccount(acc) });
}
