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
import manipulator from "../../Assets/Projects/manipulator.jpg"
import dvrkPng from "../../Assets/Projects/dvrk_all_ph.png"
import franka from "../../Assets/Projects/franka.webp"

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
              imgPath={TDLogo}
              isBlog={false}
              title="Ingenuity Dynamic Feedback Linearization"
              description="Project for the university course 'Modeling and control of UAVs', it's a project that aims to implement a dynamic feedback linearization controller for the NASA Ingenuity helicopter on Mars."
              ghLink="https://github.com/TitanWasHere/ingenuity_dynamic_feedback_linearization"
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dvrkPng}
              isBlog={false}
              title="Medical Robotics Project"
              description="Project for the university course 'Medical Robotics', developing advanced robotic systems for medical applications. Working with surgical robotics, autonomous systems, and precision control algorithms."
              ghLink="https://github.com/TitanWasHere/DaVinci_Unity"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={franka}
              isBlog={false}
              title="Robot Control Comparison Study"
              description="Comparative analysis project for the 'Robot Control' course, evaluating different control strategies and algorithms for robotic systems. Implemented and tested various control approaches including PID, adaptive control, and model-based methods."
              ghLink="https://github.com/TitanWasHere/Franka_control_comparison"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={manipulator}
              isBlog={false}
              title="Robot kinematics using machine learning"
              description="Project for the university course 'Machine Learning', it's a project that aims to use machine learning to calculate the kinematics of a robot manipulator. The project is made with Python and Tensorflow."

              ghLink="https://github.com/TitanWasHere/Autonomous-kinematics-manipulator"
            />
          </Col>
              
        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ari_logo}
              isBlog={false}
              title="ARI Receptionist Robot - Bachelor Thesis"
              description="Bachelor's thesis titled 'A receptionist robot at work: the case of ARI'. Developed a complete ROS-based system for autonomous robot navigation and human interaction at MUSE (Trento Museum of Sciences) and University of Trento. Includes path planning, problem solving, and a JavaScript interface."
              ghLink="https://github.com/TitanWasHere/ARI-thesis"
            />
          </Col>

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
