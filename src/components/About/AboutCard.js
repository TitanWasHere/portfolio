import React from "react";
import Card from "react-bootstrap/Card";
import { GiRingedPlanet } from "react-icons/gi";
import { FaSwimmer } from "react-icons/fa";
import { PiMountainsFill } from "react-icons/pi";
import { FaPlaneDeparture } from "react-icons/fa";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Andrea Gravili </span>
            from <span className="purple"> Brescia, Italia.</span>
            <br />
            I am currently pursuing the bechelor degree in <span className="purple">Computer science</span> at University of Trento.
            <br />
            I started my IT path when I started the high schools in computer science and I went on the same road since that.
            <br />
            <br />
            Those my hobbies, just to take a break from all this informatic stuff:
          </p>
          <ul>
            <li className="about-activity">
              <GiRingedPlanet /> See and study the stars
            </li>
            <li className="about-activity">
              <FaSwimmer /> Swim and go diving
            </li>
            <li className="about-activity">
              <PiMountainsFill /> Draw natural landscapes
            </li>
            <li className="about-activity">
              <FaPlaneDeparture /> Travel around the world
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Maybe in the future I'll make some new stuff{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
