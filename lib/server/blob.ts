import { put, head, del } from "@vercel/blob";

// Vercel Blob used as a simple JSON KV. We disable caching so reads-after-writes
// are consistent (Blob is CDN-backed and otherwise stale).

export async function writeJson(key: string, value: unknown): Promise<void> {
  await put(key, JSON.stringify(value), {
    access: "public",
    contentType: "application/json",
    cacheControlMaxAge: 0,
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export async function readJson<T>(key: string): Promise<T | null> {
  try {
    const meta = await head(key);
    if (!meta) return null;
    const res = await fetch(`${meta.url}?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function deleteJson(key: string): Promise<void> {
  try {
    const meta = await head(key);
    if (meta) await del(meta.url);
  } catch {
    /* ignore */
  }
}
