import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  /*Resets everything to 0 universally*/
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
  }

body{
  /*Set Color*/
  background-color: ${({ theme }) => theme.colors.backgroundColor};
}


`;
//Export Styles
export default GlobalStyles;
