import { ImageResponse } from "next/og";

export const alt = "Ernesto Vizcaíno — Full-Stack AI and Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#111111",
          color: "#f5f5f5",
          display: "flex",
          height: "100%",
          padding: "72px 84px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div style={{ color: "#9ca3af", display: "flex", fontSize: 28 }}>
            PORTFOLIO · SAN LUIS POTOSÍ, MÉXICO
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-3px",
              marginTop: 34,
            }}
          >
            Ernesto Vizcaíno
          </div>
          <div
            style={{
              color: "#d1d5db",
              display: "flex",
              fontSize: 42,
              lineHeight: 1.25,
              marginTop: 18,
            }}
          >
            Full-Stack AI &amp; Product Engineer
          </div>
          <div
            style={{
              background: "#10b981",
              borderRadius: 999,
              display: "flex",
              height: 12,
              marginTop: 54,
              width: 104,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
