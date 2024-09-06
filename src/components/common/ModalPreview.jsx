import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalPreview(props) {
  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.setShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
