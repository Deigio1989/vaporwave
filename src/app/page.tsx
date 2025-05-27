"use client";

import Main from "@/components/Main";
import GalaxyBackground from "@/components/GalaxyBackground";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />

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
