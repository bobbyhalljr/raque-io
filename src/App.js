import React from 'react';
// Import sections of the website
import {
  Vision,
  CallToAction,
  Footer,
  Mission,
  Offices,
  Reviews,
  TimeLine
} from './sections';

// Render all the sections in the website
const App = () => {
  return (
    <div>
      <Vision />
      <Mission />
      <TimeLine />
      <Offices />
      <Reviews />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
