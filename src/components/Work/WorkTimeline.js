import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WorkTimeline = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <div id="content">
            
            <ul className="timeline-1 text-white">
              {/*
              <li className="event" data-date="current">

                <h4 className="experience-title mb-3">ROBOTICS SOFTWARE ENGINEER</h4>
                <h3 className="university-name">University of Trento</h3>
                <p className="skills">
                Skills: ROS, C++, Python, software for the interaction with an humanoid robot, path planning, problem solving. 
                </p>
              </li>*/}
              <li className="event" data-date=" 02/2024 - 06/2024">
                <h4 className="experience-title mb-3">ROBOTICS SW. ENGINEER INTERN</h4>
                <h3 className="university-name">University of Trento</h3>
                <p className="skills">
                  Skills: ROS, C++, Python, software for the interaction with an humanoid robot, path planning, problem solving
                </p>
                <h4 className="goals-title">Goals achieved:</h4>
                <ul className="goals-list">
                  <li>Robot interaction with people at the Trento Museum of Sciences</li>
                  <li>Tested software in 2 big scenarios (University and MUSE)</li>
                </ul>

              </li>
              <li className="event" data-date=" 09/2023 - 02/2024">

                <h4 className="experience-title mb-3">UNIVERSITY TUTOR</h4>
                <h3 className="university-name">University of Trento</h3>
                <p className="course-description">
                  <em>University tutor for the course: software engineering</em>
                </p>
                <p className="skills">
                  Skills: JS (node.js), react.js, HTML + CSS, building of a software architecture, Mongo DB, agile, leadership, communication, creativity
                </p>
                <h4 className="goals-title">Goals achieved:</h4>
                <ul className="goals-list">
                  <li>Helped multiple students with their projects with positive feedback</li>
                  <li>Better communication and teaching skills</li>
                </ul>
                
              </li>
              <li className="event" data-date="06/2023 - 06/2024">
                <h4 className="experience-title mb-3">ICT TECHNICIAN</h4>
                <h3 className="university-name">University of Trento</h3>
                <p className="skills">
                Skills: Python, Ubuntu, computer architecture, teamwork, communication, Adaptability
                </p>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkTimeline;
