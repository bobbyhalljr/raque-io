import React, { useState } from 'react';

// Import sections of the website
import {
  Vision,
  CallToAction,
  Footer,
  Mission,
  Offices,
  Investors,
  TimeLine,
  BottomFooter
} from './sections';

import Navbar from './components/navbar/Navbar';

// import themeProvider this allows any component the ability access the theme's properties
import { ThemeProvider } from 'styled-components';
// the theme itself 
import theme from './theme';

// import GlobalStyles for website
import GlobalStyle from './globalStyles';

// Render all the sections in the website
const App = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <>
    <ThemeProvider theme={theme}>
        <Navbar 
          navbarState={navbarOpen}
          handleNavbar={handleNavbar}
        />
        <Vision />
        <Mission />
        <TimeLine />
        <Offices />
        <Investors />  
        <CallToAction />
        <Footer /> 
        <BottomFooter />
        <GlobalStyle />
       </ThemeProvider>
    </>
  );
}

export default App;
