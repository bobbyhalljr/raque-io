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

// Render all the sections in the website
const App = () => {
  return (
    <div>
      <Navbar />
      <Vision />
      <Mission />
      <TimeLine />
      <Offices />
      <Investors />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
