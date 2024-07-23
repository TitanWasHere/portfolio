import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WorkTimeline = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <div id="content">
            
            <ul className="timeline-1 text-white">
              
              <li className="event" data-date="09/2021 - 07/2024">
                <h4 className="mb-3">Bachelor's degree in Computer Science</h4>
                <p>University of Trento</p>
              </li>
              <li className="event" data-date="09/2016 - 06/2021">
                <h4 className="mb-3 pt-3">High school degree in Computer Science</h4>
                <p>ITIS G. Perlasca, Vobarno (BS)</p>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkTimeline;
