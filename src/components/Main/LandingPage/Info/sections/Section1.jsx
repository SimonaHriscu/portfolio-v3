import React from 'react';
import Section3 from './Section3';

function Section1() {
  return (
    <section id={'section_1'}>
      <div className="profile-section">
        <p>Hello, My name is Simona</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta atque
          deserunt vitae! Expedita quos incidunt asperiores quam deleniti saepe,
          odio a velit animi placeat ipsam, quo, inventore nobis ea quae.
        </p>
        <p>
          <button className="button.btn.fourth">RESUME</button>
        </p>
      </div>
      <div className="profile-picture">
        <div className="profile-picture__container"></div>
      </div>
    </section>
  );
}

export default Section1;
