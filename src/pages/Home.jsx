import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Pickle from "./Pickle";
import pickles from "../data/Picklesdata";
export default function Homescreen() {
  return (
    <Container>
      <Row>
        {pickles.map((pickle, index) => (
          <Col key={index} md={4} sm={6} xs={12} className="mb-4"> {/* Adjust the sizes based on your need */}
            <Pickle pickle={pickle} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
