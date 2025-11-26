import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WorkTimeline = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <div id="content">
            
            <ul className="timeline-1 text-white">
            <li className="event" data-date="10/2024 - current">

              <h4 className="experience-title mb-3">ROBOTICS SOFTWARE ENGINEER</h4>
              <h3 className="university-name">STT: Sapienza Technology Team</h3>
              <p className="skills">
              Skills: ROS, ROS2, C++, Python, Arduino. Developing software for a Rover robot, mainly the navigation stack and interaction with the firmware of the robot. <br/>
              From 10/2025 I'm the head of the <i>software navigation team</i>.
              </p>
              </li>
              <li className="event" data-date=" 09/2025 - current">

                <h4 className="experience-title mb-3">TEACHING ASSISTANT</h4>
                <h3 className="university-name">Sapienza, university of Rome</h3>
                <p className="course-description">
                  <em>University tutor for the course: Machine Learning</em>
                </p>
                <p className="skills">
                  Skills: python, Tensorflow, teaching, communication, leadership
                </p>

                
              </li>
              <li className="event" data-date="07/2024 - 10/2024">

                <h4 className="experience-title mb-3">ROBOTICS SOFTWARE ENGINEER</h4>
                <h3 className="university-name">University of Trento</h3>
                <p className="skills">
                Skills: ROS, Python, Javascript, Prompt logic. 
                </p>
                <h4 className="goals-title">Goals achieved:</h4>
                <ul className="goals-list">
                  <li>Robot interaction with people at the Rovereto Wired Next Festival 2024</li>
                  <li>Software for the interaction with an humanoid robot</li>
                  <li>Interaction with vocal commands or with a easy to use GUI</li>
                </ul>
              </li>
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

                <h4 className="experience-title mb-3">TEACHING ASSISTANT</h4>
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
