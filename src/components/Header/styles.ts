import styled from "styled-components";

interface ItemProps {
  hovercolor: string;
}

export const HeaderContainer = styled.header`
  z-index: 1100;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  height: 80px;
  width: 100%;
  .logo-container {
    position: relative;

    .menu-icon {
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: left 0.8s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);

      img {
        height: 40px;
      }
    }
  }
  nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: transparent;
    pointer-events: none;
    transition: color 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active {
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 16px 2px rgba(126, 203, 255, 0.25);
    nav {
      color: #fff;
      pointer-events: auto;
    }
    .menu-icon {
      left: 26px;
      transform: translate(0%, -50%);
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
