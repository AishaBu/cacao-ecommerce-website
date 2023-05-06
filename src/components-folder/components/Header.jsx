import React from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

function Header() {
  function displayNavMenu() {
    const nav = document.querySelector('nav');
    nav.style.display = 'flex';
    nav.style.transition = '1s ease-in';
  }

  function hideNavMenu() {
    const nav = document.querySelector('nav');
    nav.style.display = 'none';
    nav.style.transition = '1s ease-out';
  }

  return (
    <HeaderStyled>
      <header>
        <div className="header-banner">
          {/*Hamburger Menu*/}
          <button
            type="button"
            className="hamburger-menu"
            onClick={displayNavMenu}
            onKeyDown={displayNavMenu}
          >
            <div className="menu-line" />
            <div className="menu-line" />
            <div className="menu-line" />
          </button>

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

        {/*Navigation Side Bar Menu*/}
        <nav className="menu-sidebar">
          {/*Close Button*/}
          <button
            type="button"
            className="close-button"
            onClick={hideNavMenu}
            onKeyDown={hideNavMenu}
          >
            <MdClose />
          </button>

          {/*Home Page*/}
          <a href="#top" className="anchor-banner">
            Home
          </a>

          {/*Origins of Cacao*/}
          <a href="#top" className="anchor-banner">
            Origins of Cacao
          </a>

          {/*Processing Cacao*/}
          <a href="#top" className="anchor-banner">
            Processing Cacao
          </a>

          {/*Product Page*/}
          <a href="#top" className="anchor-banner">
            Concept Products
          </a>

          {/*Support Real Businesses*/}
          <a href="#top" className="anchor-banner">
            Support Real Businesses
          </a>

          {/*About Page*/}
          <a href="#top" className="anchor-banner">
            About
          </a>

          {/*Contact Us Page*/}
          <a href="#top" className="anchor-banner">
            Contact Us
          </a>
        </nav>
      </header>
    </HeaderStyled>
  );
}

//Styled Components
const HeaderStyled = styled.header`
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

  //Navigation SideBar Panel
  nav {
    background-color: ${({ theme }) =>
      theme.colors.navigationSidebarBackground};
    width: 268px;
    height: 650px;
    //Aligns content inside of nav menue
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 20px;

    //Set to display none intially
    display: none;
  }

  //Navigation Links Anchor Tag
  nav a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.zinnwalditeBrown};
    font-family: ${({ theme }) => theme.fonts.publicSans};
    padding-left: 15px;
  }

  //Navigation on hover
  nav a:hover {
    opacity: 70%;
  }

  //Aligns Links
  .anchor-banner {
    background-color: ${({ theme }) => theme.colors.darkKhaki};
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  //Navigation Menu Close Button
  .close-button {
    font-size: 36px;
    font-weight: bold;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.closeButtonBackground};
    width: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 200px;
    cursor: pointer;
  }

  //Close Button Hover
  .close-button:hover {
    background-color: ${({ theme }) => theme.colors.darkKhaki};
  }
`;

export default Header;
