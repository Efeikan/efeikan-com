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
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          background: "linear-gradient(145deg, #04101f 0%, #020510 100%)",
          border: "5px solid #00d4ff",
          color: "#00d4ff",
          fontSize: 92,
          fontWeight: 800,
          fontFamily: "Arial Black, Arial, sans-serif",
          letterSpacing: "-6px",
        }}
      >
        EI
      </div>
    ),
    { ...size }
  );
}
