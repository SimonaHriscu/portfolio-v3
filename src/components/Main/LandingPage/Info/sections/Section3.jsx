import React from 'react';
import boxes from './data.json';

function Section3() {
  return (
    <section id={'section_3'}>
      <div className="portfolio-section">
        <h1>Some Noteworthy projects</h1>
        {/* <p>I have a broad range of projects</p> */}
        <div className="portfolio-section__gallery">
          {boxes.map((box, i) => {
            return (
              <div className="portfolio-section__gallery__box">
                <div className="project-links">
                  <a href={box.link1} target="_blank" rel="noopener noreferrer">
                    {' '}
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                  <a href={box.link2} target="_blank" rel="noopener noreferrer">
                    <ion-icon name="open-outline"></ion-icon>
                  </a>
                </div>
                <div className="project-info">
                  <p>{box.title}</p>
                  <p>{box.descr}</p>
                </div>
                <div className="project-technologies">
                  <p>{box.technologies[1]}</p>
                  <p>{box.technologies[2]}</p>
                  <p>{box.technologies[3]}</p>
                  <p>{box.technologies[4]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Section3;
