import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <FooterStyled>
        <footer>
          {/*Footer Side Bar Menu*/}
          <nav className="footer-nav-links">
            {/*Home Page*/}
            <Link to="/" className="anchor-banner">
              Home
            </Link>

            {/*Origins of Cacao*/}
            <Link to="/pages/cacaoorigins" className="anchor-banner">
              Origins of Cacao
            </Link>

            {/*Processing Cacao*/}
            <Link to="/pages/processing" className="anchor-banner">
              Processing Cacao
            </Link>

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
        </footer>
      </FooterStyled>
    </div>
  );
}

export default Footer;

//Styled Footer Components
const FooterStyled = styled.footer`
  footer {
    background-color: ${({ theme }) =>
      theme.colors.twentyFiveOpacityDarkKhakiBackground};
    width: 100%;
    height: auto;

    //Keep Footer At Bottom
    padding: 10px;
    text-align: center;
    position: sticky;
    bottom: 0;
  }

  //Footer Navigation Links Anchor Tag
  footer nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 20px;
  }

  footer a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.zinnwalditeBrown};
    font-family: ${({ theme }) => theme.fonts.publicSans};
  }

  //Navigation on hover
  nav a:hover {
    opacity: 70%;
  }

  //MEDIA QUERIES
  //499px and above
  @media (min-width: 499px) {
    footer nav {
      display: grid;
      grid-template-columns: repeat(3, 2fr);
      column-gap: 40px;
      margin-top: 30px;
      text-align: left;
    }
  }
`;
