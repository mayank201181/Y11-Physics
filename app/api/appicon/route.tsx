import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const size = Math.min(512, Math.max(64, parseInt(searchParams.get("size") || "512")));
  const maskable = searchParams.get("maskable") === "1";
  const pad = maskable ? Math.round(size * 0.12) : 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a2342 0%, #4f52e6 100%)",
          color: "white",
          padding: pad,
        }}
      >
        <div style={{ fontSize: size * 0.42, fontWeight: 800 }}>Y11</div>
        <div style={{ fontSize: size * 0.16, fontWeight: 700, letterSpacing: 2 }}>PHYSICS</div>
      </div>
    ),
    { width: size, height: size }
  );
}
