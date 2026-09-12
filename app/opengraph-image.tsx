import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#050507",
          color: "#ece8e1",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#9a958c" }}>
          Portfolio
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 16 }}>{site.name}</div>
        <div style={{ fontSize: 34, color: "#d7ff3f", marginTop: 12 }}>{site.title}</div>
        <div style={{ fontSize: 24, color: "#9a958c", marginTop: 28, maxWidth: 860 }}>
          Python · FastAPI · LangChain · RAG · TypeScript · Node.js
        </div>
      </div>
    ),
    size
  );
}
