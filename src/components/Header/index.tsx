import React from "react";
import { HeaderContainer, NavItem } from "./styles";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { colors } from "@/styles/variables";

const Header: React.FC = () => {
  const handleMenuClick = () => {
    const menuBorder = document.getElementById("header");
    if (menuBorder) {
      menuBorder.classList.toggle("active");
    }
  };
  return (
    <HeaderContainer id="header">
      <div className="logo-container ">
        <span className="menu-icon" onClick={handleMenuClick}>
          <img src="./netscape.png" alt="logo xpace lab" />
          <FiMenu size={32} />
        </span>
      </div>
      <nav>
        <NavItem hovercolor={colors.pink}>
          <Link href="#main">Universo</Link>
        </NavItem>
        <NavItem hovercolor={colors.yellow}>
          <Link href="#about"> Estrelas</Link>
        </NavItem>
        <NavItem hovercolor={colors.blue}>
          <Link href="#contact">Contato </Link>
        </NavItem>
      </nav>
      <img className="menu-border" src="/images/menu-border.png" alt="" />
    </HeaderContainer>
  );
};

export default Header;
