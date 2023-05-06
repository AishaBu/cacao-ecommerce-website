import React from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Header() {
  return (
    <HeaderStyled>
      <div className="header-banner">
        {/*Hamburger Menu*/}
        <div className="hamburger-menu">
          <div className="menu-line" />
          <div className="menu-line" />
          <div className="menu-line" />
        </div>

        {/*Logo*/}
        <img
          src="./src/assets/logo/cacao-logo-png.png"
          alt="Cacao Logo"
          className="cacao-logo"
        />

        {/*Shopping Cart*/}
        <div className="shopping-cart">
          <AiOutlineShoppingCart />
        </div>
      </div>
    </HeaderStyled>
  );
}

//Styled Component
const HeaderStyled = styled.p`
  //Header Banner
  .header-banner {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    width: 100%;
    height: 53px;
    box-shadow: ${({ theme }) => theme.shadow.bannerBoxShadow};

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 60px;
  }

  //Hamburger Menu
  .hamburger-menu {
    background-color: ${({ theme }) => theme.colors.hamburgerMenuBackground};
    width: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 2px;
    cursor: pointer;
  }

  //Hamburger Menu on Hover
  .hamburger-menu:hover {
    background-color: ${({ theme }) => theme.colors.darkKhaki};
    opacity: 70%;
  }

  //Menu Line
  .menu-line {
    width: 29.17px;
    height: 5px;
    margin: 2px;
    background-color: ${({ theme }) => theme.colors.hamburgerMenulines};
    cursor: pointer;
  }

  //Cacao Logo
  .cacao-logo {
    width: 120px;
    height: 30px;
    box-shadow: ${({ theme }) => theme.shadow.defaultBoxShadow};
    cursor: pointer;
    border-radius: 2px;
  }

  //Shopping Cart
  .shopping-cart {
    font-size: 35px;
    cursor: pointer;
  }
`;

export default Header;
