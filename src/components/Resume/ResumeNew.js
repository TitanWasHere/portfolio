import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import cv_europass from "../../Assets/CV-Andrea_Gravili-Europass.pdf";
import cv from "../../Assets/Andrea_Gravili_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={5} style={{ paddingBottom: 20 }}>
            <Button
              variant="primary"
              href={cv}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
          
          <Col md={5} style={{ paddingBottom: 20 }}>
          <Button
            variant="primary"
            href={cv_europass}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV Europass
          </Button>
          </Col>
          
          
        </Row>

        <Row className="resume">
          <Col md={5} style={{ paddingBottom: 20 }}>
            <Document file={cv} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7/1.8 : 0.6} />
            </Document>
            <Document file={cv} className="d-flex justify-content-center">
              <Page pageNumber={2} scale={width > 786 ? 1.7/1.8 : 0.6} />
            </Document>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <Document file={cv_europass} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7/1.8 : 0.6} />
            </Document>
            <Document file={cv_europass} className="d-flex justify-content-center">
              <Page pageNumber={2} scale={width > 786 ? 1.7/1.8 : 0.6} />
            </Document>
          </Col>

          
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={5} style={{ paddingBottom: 20 }}>
          <Button
            variant="primary"
            href={cv}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          </Col>
          <Col md={5} style={{ paddingBottom: 20 }}>
          <Button
            variant="primary"
            href={cv_europass}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV Europass
          </Button>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
