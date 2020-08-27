import React from 'react';
import Contact from './Contact/ContactComponent';
import Info from './Info/InfoComponent';
import Nav from './Nav/NavComponent';

function LandingPage() {
  return (
    <div className="landing-page" id={'landing-page'}>
      <Contact />
      <Info />
      <Nav />
    </div>
  );
}

export default LandingPage;
