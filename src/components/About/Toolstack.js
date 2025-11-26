import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGithub ,
  SiUbuntu,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

import {  FaDocker } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
    </Row>
  );
}

export default Toolstack;
