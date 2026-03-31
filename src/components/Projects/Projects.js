import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import delle immagini
import iss4u from "../../Assets/Projects/issHome.png";
import itinerary from "../../Assets/Projects/ItineraryPrague.png";
import ari_logo from "../../Assets/Projects/ari.jpg";
import htv_preview from "../../Assets/Projects/HTV_preview.png";
import manipulator from "../../Assets/Projects/manipulator.jpg";
import dvrkPng from "../../Assets/Projects/dvrk_all_ph.png";
import franka from "../../Assets/Projects/franka.jpg";
import ingenuity from "../../Assets/Projects/ingenuity.png";
import visualOdometry from "../../Assets/Projects/vo_results.png";
import cbfRes from "../../Assets/Projects/cbf_res.png";
import portfolioDre from "../../Assets/Projects/portfolio_dre.png";
import dungeonSpirit from "../../Assets/Projects/dungeonSpirit.png";

function Projects() {
  const [category, setCategory] = useState("All");

  const projectsData = [
    {
      categories: ["Robotics"],
      imgPath: dvrkPng,
      isBlog: false,
      title: "Medical Robotics Project",
      description: "Project for the university course 'Medical Robotics', developing advanced robotic systems for medical applications. Working with surgical robotics, autonomous systems, and precision control algorithms.",
      ghLink: "https://github.com/TitanWasHere/DaVinci_Unity",
    },
    {
      categories: ["Robotics"],
      imgPath: franka,
      isBlog: false,
      title: "Robot Control Comparison Study",
      description: "Comparative analysis project for the 'Robot Control' course, evaluating different control strategies and algorithms for robotic systems. Implemented and tested various control approaches including PID, adaptive control, and model-based methods.",
      ghLink: "https://github.com/TitanWasHere/Franka_control_comparison",
    },
    {
      categories: ["Robotics"],
      imgPath: ingenuity,
      isBlog: false,
      title: "Ingenuity Dynamic Feedback Linearization",
      description: "Project for the university course 'Modeling and control of UAVs', it's a project that aims to implement a dynamic feedback linearization controller for the NASA Ingenuity helicopter on Mars.",
      ghLink: "https://github.com/TitanWasHere/ingenuity_dynamic_feedback_linearization",
    },
    {
      categories: ["Robotics", "AI"],
      imgPath: ari_logo,
      isBlog: false,
      title: "ARI Receptionist Robot - Bachelor Thesis",
      description: "Bachelor's thesis titled 'A receptionist robot at work: the case of ARI'. Developed a complete ROS-based system for autonomous robot navigation and human interaction at MUSE (Trento Museum of Sciences) and University of Trento. Includes path planning, problem solving, and a JavaScript interface.",
      ghLink: "https://github.com/TitanWasHere/ARI-thesis",
    },
    {
      categories: ["AI", "Robotics"],
      imgPath: cbfRes,
      isBlog: false,
      title: "Control Barrier Functions + RL",
      description: "Project for the university course 'Reinforcement Learning', it's a project that aims to implement a control barrier function for the safe control of dynamical systems and adding reinforcement learning techniques. The project is made with Python and Casadi.",
      ghLink: "https://github.com/TitanWasHere/Safe_exploration_RL_CBF",
    },
    {
      categories: ["Robotics"],
      imgPath: visualOdometry,
      isBlog: false,
      title: "Visual Odometry",
      description: "Project for the university course 'Probabilistic robotics', it's a project that aims to implement a visual odometry algorithm for the autonomous navigation of a robot.",
      ghLink: "https://github.com/TitanWasHere/Visual_Odometry",
    },
    
    {
      categories: ["AI", "Robotics"],
      imgPath: manipulator,
      isBlog: false,
      title: "Robot kinematics using machine learning",
      description: "Project for the university course 'Machine Learning', it's a project that aims to use machine learning to calculate the kinematics of a robot manipulator. The project is made with Python and Tensorflow.",
      ghLink: "https://github.com/TitanWasHere/Autonomous-kinematics-manipulator",
    },
    {
      categories: ["Achievements"],
      imgPath: "https://d3rchgs4e1mj7u.cloudfront.net/wp-content/uploads/2023/03/24125029/VENETO-STARS.jpg",
      isBlog: false,
      title: "Safe-HILLS",
      description: "Winners of the challenge 'Veneto Stars' with the project 'Safe-HILLS', a project that aims to improve the water management of the unesco site of the prosecco hills in Conegliano and Valdobbiadene.",
      demoLink: "https://venetostars.com/",
    },
    {
      categories: ["Games"],
      imgPath: dungeonSpirit,
      isBlog: false,
      title: "Dungeon Spirit",
      description: "Game developed in Tree.Js for the university course 'Interactive graphics', it is a isometric pixelated dungeon game, where the player has to exit the dungeon.",
      ghLink: "https://github.com/TitanWasHere/Interactive_graphics/tree/main/DungeonSpirit",
    },
    {
      categories: ["Websites design"],
      imgPath: htv_preview,
      isBlog: false,
      title: "HTV website",
      description: "Website for Hydro-Tech Vision, a project that aims to improve the water management of the vineyards using remote sensing and ground datas.",
      demoLink: "https://titanwashere.github.io/HTV-website/",
    },
    
    {
      categories: ["Websites design"],
      imgPath: portfolioDre,
      isBlog: false,
      title: "Photography portfolio website",
      description: "Portfolio website for a friend of mine, created using Astro, it is a photo and graphics gallery with a custom design and a custom CMS to manage the photos and the graphics. The website is fully responsive and optimized for SEO.",
      ghLink: "https://github.com/TitanWasHere/portfolio_dre",
    },
    {
      categories: ["Websites design"],
      imgPath: iss4u,
      isBlog: false,
      title: "ISS4U",
      description: "Project for the university course 'Software Engineering', it's an application to manage tasks on the International Space Station (ISS) and displaying data about that. The website is made with node.js and vue.js",
      ghLink: "https://github.com/SE-T28",
    },
    {
      categories: ["Websites design"],
      imgPath: itinerary,
      isBlog: false,
      title: "Itinerary trip to Prague",
      description: "First website for the 4th year of high schools, it's a full responsive website made only in HTML5+CSS3, and it's the itinerary for our school trip to Prague. It's my first website made full responsive without CSS3 frameworks",
      demoLink: "http://andreagravilibarcellonax.altervista.org/Sito_Praga/home.html",
    },
  ];

  // La logica di filtro ora usa .includes()
  const filteredProjects = category === "All" 
    ? projectsData 
    : projectsData.filter((project) => project.categories.includes(category));

  const allCategories = ["All", "Robotics", "AI", "Websites design", "Games", "Achievements"];

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

        {/* Versione Desktop: Bottoni in fila */}
        <div className="d-none d-md-flex justify-content-center mb-5" style={{ gap: "15px" }}>
          {allCategories.map((cat) => (
            <Button
              key={cat}
              variant="primary"
              onClick={() => setCategory(cat)}
              style={{
                opacity: category === cat ? 1 : 0.6,
                fontWeight: category === cat ? "bold" : "normal",
                transition: "all 0.3s ease"
              }}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Versione Mobile: Menu a tendina */}
        <div className="d-block d-md-none mb-4" style={{ width: "80%", margin: "0 auto" }}>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ 
              backgroundColor: "rgba(0, 0, 0, 0.5)", 
              color: "white", 
              border: "1px solid #c770f0",
              padding: "10px",
              position: "relative", 
              zIndex: 999
            }}
          >
            {allCategories.map((cat) => (
              <option key={cat} value={cat} style={{ backgroundColor: "#1c1c24" }}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </div>

        {/* Griglia Progetti */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                driveLink={project.driveLink}
              />
            </Col>
          ))}
          
          {filteredProjects.length === 0 && (
            <h3 style={{ color: "white", marginTop: "20px" }}>No projects found in this category.</h3>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;