import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiGit,
  DiJava,
  DiMysql,
} from "react-icons/di";
import {
  SiCplusplus,
  SiPhp,
  SiPostgresql,
} from "react-icons/si";
import{
  FaC,
} from "react-icons/fa6";
import{
  FaPython,
  FaRProject,
  FaVuejs,
} from "react-icons/fa";
import{
  BiLogoMongodb,
} from "react-icons/bi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRProject/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoMongodb/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaVuejs/>
      </Col>
      
    </Row>
  );
}

export default Techstack;
