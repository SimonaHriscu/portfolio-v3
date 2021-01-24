import React from "react";
import data from 'assets/icons-source';

const titles=[
  "html",
  "css",
  "sass",
  "javascript",
  "react",
  "react native",
  "redux",
  "node",
  "express",
  "mongoDB",
  "git",
  "gitHub",
  "terminal",
  "vsc",
  "json",
  "adobe",
  "figma",
  "photoshop",]
function Section2() {
  return (
    <section id={"skills"}>
      <div className="skills-section">
        <h1>Skills</h1>
        <div className="skills-gallery">

        {data.map((item, i) => (
          <div key={i}>
            <img src={`${item}`} alt={titles[i]} width="50" height="50" />
        <p className="skills-gallery__title">{titles[i].toUpperCase()}</p>
          </div>
        ))}
        </div>
        <p className='extra-title'>I have become familial with and can successfully use / apply :</p>
        <ul className="extra-skills">
          <li>
            <ion-icon name="checkmark"></ion-icon>
            <span>Bootstrap</span>
          </li>
          <li>
            <ion-icon name="checkmark"></ion-icon>
            <span>React Hooks</span>
          </li>
          <li>
            <ion-icon name="checkmark"></ion-icon>
            <span>AJAX/Fetch API</span>
          </li>
       
          <li>
            <ion-icon name="checkmark"></ion-icon>
            <span>NPM/YARN</span>
          </li>
          
          <li>
            <ion-icon name="checkmark"></ion-icon>
            <span>Mongoose</span>
          </li>
          <li>
            <ion-icon name="checkmark"></ion-icon>
            <span>Responsive design</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Section2;
