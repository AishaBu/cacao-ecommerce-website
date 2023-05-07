import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './global-and-theme/Theme';
import GlobalStyles from './global-and-theme/Global-Styles';
import Header from './components-folder/components/Header';
import Content from './components-folder/components/Content';
import Footer from './components-folder/components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
