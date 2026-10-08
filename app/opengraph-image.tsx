import { ImageResponse } from "next/og";
import { SITE_NAME } from "./lib/site";

export const alt = "Elliot Lucky | Full-Stack & Blockchain Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#f3f2ef",
        color: "#141414",
      }}
    >
      <div
        style={{
          fontSize: 26,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "rgba(20,20,20,0.5)",
        }}
      >
        Portfolio 2026
      </div>
      <div
        style={{
          fontSize: 150,
          fontWeight: 900,
          lineHeight: 0.95,
          marginTop: 24,
          textTransform: "uppercase",
        }}
      >
        {SITE_NAME}
      </div>
      <div style={{ fontSize: 38, marginTop: 32, color: "rgba(20,20,20,0.7)" }}>
        Full-Stack &amp; Blockchain Developer
      </div>
      <div style={{ fontSize: 28, marginTop: 12, color: "rgba(20,20,20,0.5)" }}>
        Midnight · CKB · Rust · TypeScript
      </div>
    </div>,
    size,
  );
}
