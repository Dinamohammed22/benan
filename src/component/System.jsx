import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Col, NavLink, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function System() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="system">
      <NavLink variant="primary" onClick={handleShow}>
        نسخة تجريبية
      </NavLink>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="header-" closeButton>
          <Modal.Title className="title-">نسخة تجريبية</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="system-form">
            <Form.Group className="mb-3" controlId="SystemForm.ControlInput1">
              <Form.Label className="modal-label-">الاسم</Form.Label>
              <Form.Control className="input-" type="name" placeholder="الاسم" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="SystemForm.ControlInput1">
              <Form.Label className="modal-label-">رقم الجوال</Form.Label>
              <Form.Control
              className="input-"
                type="phonenumber"
                placeholder="رقم الجوال"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="SystemForm.ControlInput1">
              <Form.Label className="modal-label-">المدينة</Form.Label>
              <Form.Control className="input-" type="name" placeholder="المدينة" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="SystemForm.ControlInput1">
              <Form.Label className="modal-label-">الحي</Form.Label>
              <Form.Control className="input-" type="name" placeholder="الحي" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3 email-" controlId="SystemForm.ControlInput1">
              <Form.Label className="modal-label-">البريد الالكتروني</Form.Label>
              <Form.Control
              className="input-"
                type="email"
                placeholder="البريد الالكتروني"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3 text-"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="modal-label-">الرسالة</Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-footer-">
          <Button className="btn-modal secondary" variant="secondary" onClick={handleClose}>
          اغلاق
          </Button>
          <Button className="btn-modal primary" variant="primary" onClick={handleClose}>
            ارسال
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default System;
