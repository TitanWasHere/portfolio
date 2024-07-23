import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Timeline from "./Timeline"

function Education() {
  return (
    <Container fluid className="project-section">
        <Particle />
        <Container>
            <h1 className="project-heading">
            My <strong className="purple">Education </strong>
            </h1>
            <p style={{ color: "white" }}>
            Here's the timeline of my education.
            </p>
            
            <Timeline />
        </Container>
    </Container>
  );
}export default Education;