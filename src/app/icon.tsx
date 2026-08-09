import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "linear-gradient(145deg, #04101f 0%, #020510 100%)",
          border: "1.5px solid rgba(0, 212, 255, 0.5)",
          color: "#00d4ff",
          fontSize: 16,
          fontWeight: 800,
          fontFamily: "Arial Black, Arial, sans-serif",
          letterSpacing: "-1px",
        }}
      >
        EI
      </div>
    ),
    { ...size }
  );
}
