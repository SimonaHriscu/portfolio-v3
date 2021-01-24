import React from "react";
import html from "assets/html.svg";
import css from "assets/css.svg";
import sass from "assets/sass.svg";
import javascript from "assets/javascript.svg";
import react from "assets/react.svg";
import reactNative from "assets/react native.svg";
import redux from "assets/redux.svg";
import node from "assets/node.svg";
import express from "assets/express.svg";
import mongoDB from "assets/mongodb.svg";
import git from "assets/git.svg";
import gitHub from "assets/github.svg";
import terminal from "assets/terminal.svg";
import vsc from "assets/vsc.svg";
import json from "assets/json.svg";
import adobe from "assets/adobexd.svg";
import figma from "assets/figma.svg";
import photoshop from "assets/photoshop.svg";
import photo from 'assets/css.svg';

const data = [
  html,
  css,
  sass,
  javascript,
  react,
  reactNative,
  redux,
  node,
  express,
  mongoDB,
  git,
  gitHub,
  terminal,
  vsc,
  json,
  adobe,
  figma,
  photoshop,
];
function Section2() {
  console.log(photo);

  return (
    <section id={"skills"}>
      <div className="skills-section">
        <h1>Skills</h1>
        <div className="skills-gallery">

        {data.map((item, i) => (
          <div key={i}>
            <img src={`${item}`} alt={data[1]} width="50" height="50" />
        <p  className="skills-gallery__title">{data[i].slice(14,-13).toUpperCase()}</p>
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
