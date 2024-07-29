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

  const handleDownloadClick = (label) => {
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Button',
        event_label: label,
      });
    }
  };

  const getDimension = (width) => {
    if(width >= 1450){
      return 1;
    }
    if(width >= 1200){
      return 0.8;
    }
    if(width >= 1100){
      return 0.7;
    }
    if(width >= 940){
      return 0.65;
    }
    if(width > 786){
      return 0.5;
    }else{
      return 0.6;
    }
  }

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
              onClick={() => handleDownloadClick('Download CV')}
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
              onClick={() => handleDownloadClick('Download CV Europass')}
            >
              <AiOutlineDownload />
              &nbsp;Download CV Europass
            </Button>
          </Col>
        </Row>

        <Row className="resume">
          <Col md={5} style={{ paddingBottom: 20 }}>
            <Document file={cv} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={getDimension(width)} />
            </Document>
            <Document file={cv} className="d-flex justify-content-center">
              <Page pageNumber={2} scale={getDimension(width)} />
            </Document>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <Document file={cv_europass} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={getDimension(width)} />
            </Document>
            <Document file={cv_europass} className="d-flex justify-content-center">
              <Page pageNumber={2} scale={getDimension(width)} />
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
              onClick={() => handleDownloadClick('Download CV')}
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
              onClick={() => handleDownloadClick('Download CV Europass')}
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
