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
        </div>
      </section>
      <section id={'section_3'}>This is section 3</section>
      <section id={'section_4'}>This is section 4</section>
    </div>
  );
}

export default Info;
