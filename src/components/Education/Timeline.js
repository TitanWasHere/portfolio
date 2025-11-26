import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Timeline = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <div id="content">
            
            <ul className="timeline-1 text-white">
            <li className="event" data-date="09/2024 - current">
                <h4 className="experience-title mb-3">Master's degree in Artificial Intelligence and Robotics</h4>
                <h3 className="university-name">Sapienza, University of Rome</h3>
                <p className="skills">
                Studying the concepts of robotics, artificial intelligence, control, all in a software engineering perspective. 
                I'm studying also simulation softwares and advanced programming concepts.
                </p>
              </li>
              <li className="event" data-date="09/2021 - 07/2024">
                <h4 className="experience-title mb-3">Bachelor's degree in Computer Science</h4>
                <h3 className="university-name">University of Trento</h3>
                <p className="skills">
                With my thesis "A receptionist robot at work: the case of ARI" I graduated in Computer Science at the University of Trento.
                Here I learned the basics of computer science, software engineering, robotics, and artificial intelligence.
                </p>
              </li>
              <li className="event" data-date="09/2016 - 06/2021">
                <h4 className="experience-title mb-3">High school degree in Computer Science</h4>
                <h3 className="university-name">ITIS G. Perlasca</h3>
                <p className="skills">
                I graduated in Computer Science at ITIS G. Perlasca in 2021. Here I learned the basis of web development, computer architecture, and networking.
                </p>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Timeline;
