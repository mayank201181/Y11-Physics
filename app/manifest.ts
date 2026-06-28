import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Year 11 Physics Lab",
    short_name: "Physics Lab",
    description: "Interactive Edexcel IGCSE Physics revision — guides, quizzes, exam practice and an AI tutor.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1020",
    theme_color: "#0b1020",
    orientation: "portrait",
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
