import React from "react";
import { HeaderContainer, NavItem } from "./styles";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Header: React.FC = () => {
  const pink = "#F90096";
  const yellow = "#F9B807";
  const blue = "#5273FF";

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
          <FiMenu size={32} color="#F90096" />
        </span>
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
