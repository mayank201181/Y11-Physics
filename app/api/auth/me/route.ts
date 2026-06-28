import { NextResponse } from "next/server";
import { currentAccount, publicAccount } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const acc = await currentAccount();
  return NextResponse.json({ account: acc ? publicAccount(acc) : null });
}
