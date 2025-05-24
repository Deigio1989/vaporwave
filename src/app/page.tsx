"use client";

import Main from "@/components/Main";
import GalaxyBackground from "@/components/Stars";
import Link from "next/link";
import VaporwaveBackground from "@/components/Grid";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      {/* fundo 3d */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <VaporwaveBackground />
      </div>
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <GalaxyBackground />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 1,
          top: 0,
          left: 0,
        }}
      >
        <Main />
      </div>
    </div>
  );
}
