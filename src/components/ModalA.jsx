import Modal from "react-bootstrap/Modal";
import Button from "./Button";
import { useState } from "react";

const ModalA = ({ msg, bodyMsg, showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Modal
      show={showModal}
      size="md"
      onHide={handleClose}
      setShowModal={setShowModal}
    >
      <Modal.Body className="p-4 mt-3">
        <h5>{msg}</h5>
        <p>{bodyMsg}</p>
        <br />
        <div className="text-center mt-5">
          <Button className={"btnStyleA"} onClick={handleClose}>
            Ok
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalA;
