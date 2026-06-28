"use client";

import { useStore } from "@/lib/store";
import { AuthGate } from "./AuthGate";
import { ProfilePicker } from "./ProfilePicker";
import { Mascot } from "./Mascot";
import { usePathname } from "next/navigation";

export function AppGate({ children }: { children: React.ReactNode }) {
  const { status } = useStore();
  const pathname = usePathname();

  if (status === "loading") {
    return (
      <div className="min-h-screen grid place-items-center">
        <div className="text-center">
          <div className="text-5xl floaty">⚛️</div>
          <p className="mt-3 text-[var(--ink-soft)]">Warming up the lab…</p>
        </div>
      </div>
    );
  }

  if (status === "anon") return <AuthGate />;
  if (status === "no-profile") return <ProfilePicker />;

  // Parent dashboard renders without the mascot.
  const showMascot = !pathname?.startsWith("/parent");
  return (
    <>
      {children}
      {showMascot && <Mascot />}
    </>
  );
}
