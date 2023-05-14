import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from './global-and-theme/Theme';
import GlobalStyles from './global-and-theme/Global-Styles';
import Header from './components-folder/components/Header';
import Footer from './components-folder/components/Footer';
import Home from './components-folder/components/pages/home';
import CacaoOrigins from './components-folder/components/pages/cacaoorigins';
import Processing from './components-folder/components/pages/processing';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/pages/cacaoorigins" element={<CacaoOrigins />} />
              <Route path="/pages/processing" element={<Processing />} />
            </Routes>
            <Footer />
          </div>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
