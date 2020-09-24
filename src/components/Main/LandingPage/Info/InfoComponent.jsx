import React from 'react';
import Section1 from './sections/Section1/Section1';
import Section2 from './sections/Section2/Section2';
import Section3 from './sections/Section3/Section3';
import Section4 from './sections/Section4/Section4';

function Info() {
  return (
    <div className="landing-info">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default Info;
