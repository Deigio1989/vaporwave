"use client";

import Main from "@/components/Main";
import { Header, NavItem } from "../globalStyles";
import GalaxyBackground from "@/components/Stars";
import Link from "next/link";
import VaporwaveBackground from "@/components/Grid";

export default function Home() {
  const pink = "#F90096";
  const yellow = "#F9B807";
  const blue = "#5273FF";
  return (
    <div>
      <Header>
        <div className="logo-container ">
          <img src="./logo-xpace-lab-imagem.png" alt="logo xpace lab" />
        </div>
        <nav>
          <NavItem hovercolor={pink}>
            <Link href="#main">Universo</Link>
          </NavItem>
          <NavItem hovercolor={yellow}>
            <Link href="#about"> Estrelas</Link>
          </NavItem>

          <NavItem hovercolor={blue}>
            <Link href="#contact">Contato </Link>
          </NavItem>
        </nav>
        <img className="menu-border" src="/images/menu-border.png" alt="" />
      </Header>

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
