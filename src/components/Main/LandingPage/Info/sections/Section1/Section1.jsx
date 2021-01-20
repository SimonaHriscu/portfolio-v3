import React from 'react';
import photo from './simona.jpg';
import resume from './Simona-Hriscu-resume.pdf';

export default function Section1() {
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
        <span>

        <a className="button.btn.fourth" href={resume} title='Resume' download>
          <button >Resume</button>
        </a>
        </span>
      </div>
      <div className="profile-picture">
        <div className="profile-picture__container">
          <img src={photo} alt="profile" />
        </div>
      </div>
    </section>
  );
}

