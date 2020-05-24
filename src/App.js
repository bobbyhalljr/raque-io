import React from 'react';

// Import sections of the website
import {
  Navbar,
  Vision,
  CallToAction,
  Footer,
  Mission,
  Offices,
  Investors,
  TimeLine
} from './sections';

// import themeProvider this allows any component the ability access the theme's properties
import { ThemeProvider } from 'styled-components';
// the theme itself 
import theme from './theme';

// import GlobalStyles for website
import GlobalStyle from './css/globalStyles';

// Render all the sections in the website
const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Navbar />
        <Vision />
        <Mission />
        <TimeLine />
        <Offices />
        <Investors />
        <CallToAction />
        <Footer />
        <GlobalStyle />
       </ThemeProvider>
    </>
  );
}

export default App;
