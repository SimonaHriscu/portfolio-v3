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
