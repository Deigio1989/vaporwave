import styled from "styled-components";

interface ItemProps {
  hovercolor: string;
}

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1100;
  nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .logo-container {
    position: relative;
    img {
      position: absolute;
      top: 40px;
      transform: translateY(-50%);
      left: 24px;
      height: 40px;
    }
  }
  .menu-border {
    margin: auto;
  }
`;

export const NavItem = styled.h2<ItemProps>`
  font-size: 32px;
  font-weight: 900;
  transition: color 0.3s;
  &:hover {
    color: ${(props) => props.hovercolor};
  }
`;
