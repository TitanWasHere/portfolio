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
              I'm a software developer with great interest in technology and always open to new projects!
              
              <br />
              <br />I am currently fluent and involved in programming languages like
              <i>
                <b className="purple"> C++, Javascript and Python. Now developing software with the use of ROS </b>
              </i>
              <br />
              <br />
              My field of interest is building new 
              <i>
                <b className="purple"> Robotics </b> and <b className="purple"> Artificial Intelligence </b> but i'm also interested in areas related to{" "}
                <b className="purple">
                  Web Development
                </b> and <b className="purple"> remote sensing</b>.
              </i>
              <br />
              <br />
              
              Actually I'm working on a project (HTV) that involves the use of satellite data and machine learning to improve the <b className="purple">water management</b> in the vineyards.
              If you are interested in my work, don't hesitate to contact me!
              <br />
              <a href="https://titanwashere.github.io/HTV-website/" target="_blank" rel="noreferrer" className="purple">HTV website</a>
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
              <li className="social-icons">
              

              </li> 
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
