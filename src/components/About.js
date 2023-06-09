import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>With the courage to begin and the discipline to endure, victory becomes a matter of time</p>
    <img src={image} alt="I made this"/> 
  </div>
  );
}

export default About;
