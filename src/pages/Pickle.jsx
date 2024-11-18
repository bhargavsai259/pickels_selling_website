import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

export default function Pickle({ pickle }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card m-2 p-3" style={{ width: "18rem" }}>
      <div onClick={handleShow} className="text-center">
        <h5>{pickle.name}</h5>
        <img
          src={pickle.image}
          className="img-fluid"
          alt={pickle.name}
          style={{ height: "100px", width: "100px" }}
        />
      </div>

      <Form.Group as={Row} className="my-2">
        <Form.Label column sm="4">
          Varients
        </Form.Label>
        <Col sm="8">
          <Form.Select
            value={varient}
            onChange={(event) => setVarient(event.target.value)}
          >
            {pickle.varients.map((varient, index) => (
              <option key={index} value={varient}>
                {varient}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="my-2">
        <Form.Label column sm="4">
          Quantity
        </Form.Label>
        <Col sm="8">
          <Form.Select
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Form.Group>

      <div className="price my-3">
        <p>
          Quantity: {quantity}, Price: {pickle.prices[0][varient]} Rs/-
        </p>
        <p>Total Cost: {quantity * pickle.prices[0][varient]} Rs/-</p>
        <Button variant="success" className="w-100">
          ADD TO CART
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pickle.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={pickle.image}
            className="img-fluid"
            style={{ height: "200px" }}
            alt={pickle.name}
          />
          <p>{pickle.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
