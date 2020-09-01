import React from 'react';
import photo from '../img/simona.jpg';

function Section1() {
  return (
    <section id={'section_1'}>
      <div className="profile-section">
        <p>Hello,</p>
        <p>My name is Simona</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta atque
          deserunt vitae! Expedita quos incidunt asperiores quam deleniti saepe,
          odio a velit animi placeat ipsam, quo, inventore nobis ea quae. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nulla!
        </p>
        <a href="#section_3">
          {' '}
          <button className="button.btn.fourth">Projects</button>
        </a>
      </div>
      <div className="profile-picture">
        <div className="profile-picture__container">
          <img src={photo} alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default Section1;
