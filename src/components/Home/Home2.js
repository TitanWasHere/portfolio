import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello there! I'm <span className="purple">Andrea</span> and welcome to my website, which is the tip of the iceberg of myself! 
              I'm a software developer with great interest in astronomy and always open to new projects and learn new technologies!
              
              <br />
              <br />I am currently fluent and involved in programming languages like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new 
              <i>
                <b className="purple"> Web Technologies and Products </b> but
                also in areas related to{" "}
                <b className="purple">
                  Robotics
                </b>
              </i>
              <br />
              <br />
              I'm very flexible becaue whenever I can I try to design myself all what I want, making the 
              <b className="purple"> design</b> and using 
              <i>
                <b className="purple">
                  {" "}
                  UI softwares
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Figma and Photoshops{" "}</b> 
              </i>
                making the base for web applications based on 
              <i>
                <b className="purple"> Node.js </b>
              </i>
                using javascript frameworks like 
              <i>
                <b className="purple"> React.js and Vue.js </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TitanWasHere"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/http_dre_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/andrea-gravili-b1b808254/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/http.dre._/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
