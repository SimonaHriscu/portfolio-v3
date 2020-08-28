import React from 'react';

function Info() {
  return (
    <div className="landing-info">
      <section id={'section_1'}>
        <div className="profile-section">
          <p>Hello, My name is Simona</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            atque deserunt vitae! Expedita quos incidunt asperiores quam
            deleniti saepe, odio a velit animi placeat ipsam, quo, inventore
            nobis ea quae.
          </p>
          <p>
            <button className="button.btn.fourth">RESUME</button>
          </p>
        </div>
        <div className="profile-picture">This is profile pic</div>
      </section>
      <section id={'section_2'}>
        <div className="skills-section">
          {' '}
          <h1>Skills</h1>
          <p>
            I have a broad range of applicable skills that will enable me to be
            a valuable member of your team. These include specific technical
            skills I have developed over the past year along with strong soft
            skills developed over the course of my career.
          </p>
          <ul className="skills-gallery">
            <li>
              <ion-icon name="logo-html5"></ion-icon>
              <p>HTML</p>
            </li>
            <li>
              <ion-icon name="logo-css3"></ion-icon>
              <p>CSS</p>
            </li>
            <li>
              <ion-icon name="logo-sass"></ion-icon>
              <p>SASS</p>
            </li>
            <li>
              <ion-icon name="logo-react"></ion-icon>
              <p>React</p>
            </li>
            <li>
              <ion-icon name="logo-javascript"></ion-icon>
              <p>JavaScript</p>
            </li>
            <li>
              <ion-icon name="logo-nodejs"></ion-icon>
              <p>Node.js</p>
            </li>
            <li>
              <ion-icon name="logo-npm"></ion-icon>
              <p>NPM</p>
            </li>
            <li>
              <ion-icon name="logo-github"></ion-icon>
              <p>GitHub</p>
            </li>
          </ul>
          <p>I have become familial with these technologies as well:</p>
          <ul>
            <li>
              <ion-icon name="arrow-redo-outline"></ion-icon>
              <span>Bootstrap</span>
            </li>
            <li>
              <ion-icon name="arrow-redo-outline"></ion-icon>
              <span>Redux</span>
            </li>
            <li>
              <ion-icon name="arrow-redo-outline"></ion-icon>
              <span>React Hooks</span>
            </li>
            <li>
              <ion-icon name="arrow-redo-outline"></ion-icon>
              <span>MongoDB</span>
            </li>
          </ul>
        </div>
      </section>
      <section id={'section_3'}>This is section 3</section>
      <section id={'section_4'}>This is section 4</section>
    </div>
  );
}

export default Info;
