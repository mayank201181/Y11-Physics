import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 800 }}>Y11</div>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 2 }}>PHYSICS</div>
      </div>
    ),
    { ...size }
  );
}
