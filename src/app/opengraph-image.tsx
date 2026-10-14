import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#012060",
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(36,89,214,0.55), transparent 50%), radial-gradient(circle at 10% 100%, rgba(143,176,242,0.18), transparent 40%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ffffff",
              color: "#012060",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            GM
          </div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 26, color: "#8fb0f2", letterSpacing: 4, textTransform: "uppercase" }}>
            {site.tagline}
          </div>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            Scale Your Development Team with Expert Engineers
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              height: 6,
              width: 360,
              borderRadius: 3,
              background: "linear-gradient(90deg, #ffffff, #8fb0f2, #2459d6)",
            }}
          />
          <div style={{ fontSize: 26, color: "#c9d3e3" }}>{site.domain}</div>
        </div>
      </div>
    ),
    size,
  );
}
