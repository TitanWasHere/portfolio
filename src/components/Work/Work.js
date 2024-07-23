import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import WorkTimeline from "./WorkTimeline"

function Work() {
  return (
    <Container fluid className="project-section">
        <Particle />
        <Container>
            <h1 className="project-heading">
            My <strong className="purple">Work experiences </strong>
            </h1>
            <p style={{ color: "white" }}>
            Here's the timeline of my work experiences.
            </p>
            
            <WorkTimeline />
        </Container>
    </Container>
  );
}export default Work;