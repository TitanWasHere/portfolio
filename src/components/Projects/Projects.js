import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TDLogo from "../../Assets/Projects/TechDowserLogo.png"
import iss4u from "../../Assets/Projects/issHome.png";
import minesweeper from "../../Assets/Projects/minesweeper.png"
import itinerary from "../../Assets/Projects/ItineraryPrague.png"
import ari_logo from "../../Assets/Projects/ari.jpg"
import htv_preview from "../../Assets/Projects/HTV_preview.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong> and <strong className="purple">Achievements</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on, but also achievements/awards.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={htv_preview}
              isBlog={false}
              title="HTV website"
              description="Website for Hydro-Tech Vision, a project that aims to improve the water management of the vineyards using remote sensing and ground datas."
              
              demoLink="https://titanwashere.github.io/HTV-website/"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://d3rchgs4e1mj7u.cloudfront.net/wp-content/uploads/2023/03/24125029/VENETO-STARS.jpg"}
              isBlog={false}
              title="Safe-HILLS"
              description="Winners of the challenge 'Veneto Stars' with the project 'Safe-HILLS', a project that aims to improve the water management of the unesco site of the prosecco hills in Conegliano and Valdobbiadene. "
              demoLink="https://venetostars.com/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ari_logo}
              isBlog={false}
              title="ARI thesis"
              description="My thesis for the university course 'Computer science', it's a project about the use of ROS for the development of a robot that can interact with people and move autonomously. This project is made with ROS, Python and an interface with Javascript."
              ghLink="http://andreagravilibarcellonax.altervista.org/Sito_Praga/home.html"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TDLogo}
              isBlog={false}
              title="Tech Dowser"
              description="Project for the university course 'Human Computer Interaction', it's a prototype of a potability water detector with a connected application which contains its position and data of the detected water"
              driveLink="https://drive.google.com/drive/u/0/folders/1YsaFhWc3lekWEJWNR3tJBMYu7FnEPIeK"
              
            />
            
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iss4u}
              isBlog={false}
              title="ISS4U"
              description="Project for the university course 'Software Engineering', it's an application to manage tasks on the International Space Station (ISS) and displaying data about that. The website is made with node.js and vue.js"
              ghLink="https://github.com/SE-T28"
              
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minesweeper}
              isBlog={false}
              title="Minesweeper"
              description="It's a simple minesweeper game made in Java with the framework javafx for the GUI, made for fun on july 2022 "
              ghLink="https://github.com/TitanWasHere/minesweeper"
              
            />
            
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={itinerary}
              isBlog={false}
              title="Itinerary trip to Prague"
              description="First website for the 4th year of high schools, it's a full responsive website made only in HTML5+CSS3, and it's the itinerary for our school trip to Prague. It's my first website made full responsive without CSS3 frameworks"
              demoLink="http://andreagravilibarcellonax.altervista.org/Sito_Praga/home.html"
              
            />
            
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
