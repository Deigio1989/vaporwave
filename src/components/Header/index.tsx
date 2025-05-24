import React from "react";
import { HeaderContainer, NavItem } from "./styles";
import Link from "next/link";

const Header: React.FC = () => {
  const pink = "#F90096";
  const yellow = "#F9B807";
  const blue = "#5273FF";
  return (
    <HeaderContainer>
      <div className="logo-container ">
        <img src="./netscape.png" alt="logo xpace lab" />
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
    </HeaderContainer>
  );
};

export default Header;
