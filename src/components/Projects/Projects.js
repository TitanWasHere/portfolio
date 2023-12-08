import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import iss4u from "../../Assets/Projects/issHome.png";
import itinerary from "../../Assets/Projects/ItineraryPrague.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
              imgPath={itinerary}
              isBlog={false}
              title="Itinerary trip to Prague"
              description="First website for the 4th year of high schools, it's a full responsive website made only in HTML5+CSS3, and it's the itinerary for our school trip to Prague"
              demoLink="http://andreagravilibarcellonax.altervista.org/Sito_Praga/home.html"
              
            />
            
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
