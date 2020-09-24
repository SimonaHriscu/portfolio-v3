import React from 'react';
import photo from '../img/simona.jpg';

function Section1() {
  return (
    <section id={'section_1'}>
      <div className="profile-section">
        <p>Hello,</p>
        <p>My name is Simona</p>

        <div className="profile-picture-two__container-two">
          <img src={photo} alt="profile" />
        </div>

        <div>
          <p>
            Creative and solution-oriented frontend developer with hands-on
            technical skills and clean, structured, and maintainable code.
            Building state-of-the-art, easy to use, innovative designed websites
            and applications that span multiple technologies is truly a passion
            of mine.
          </p>
          <p>If you think we should work together, feel free to contact me!</p>
        </div>

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
