import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './global-and-theme/Theme';
import Header from './components-folder/components/Header';
import GlobalStyles from './global-and-theme/Global-Styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Header />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
