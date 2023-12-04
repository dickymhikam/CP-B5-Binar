import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

import "../../styles/ModalTambahKelas.css";

const ModalUbahKelas = (props) => {
  const [accordionItems, setAccordionItems] = useState([
    {
      id: 0,
      header: "Video 1",
      body: (
        <Accordion.Body className="mb-0">
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Judul Video</Form.Label>
            <Form.Control
              type="text"
              placeholder="Judul Video"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Link Video</Form.Label>
            <Form.Control
              type="text"
              placeholder="Link Video"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Chapter</Form.Label>
            <Form.Control
              type="number"
              placeholder="Chapter"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
            <Form.Label>Premium</Form.Label>
            <Form.Control as="select" autoFocus className="form-modal-admin">
              <option value="premium">Premium</option>
              <option value="gratis">Gratis</option>
            </Form.Control>
          </Form.Group>
        </Accordion.Body>
      ),
    },
  ]);

  const addAccordionItem = () => {
    const newId = accordionItems.length;
    const newAccordion = {
      id: newId,
      header: `Video ${newId + 1}`,
      body: (
        <Accordion.Body className="mb-0">
          <Form.Group className="mb-3 " controlId={`judulVideo${newId}`}>
            <Form.Label>Judul Video</Form.Label>
            <Form.Control
              type="text"
              placeholder="Judul Video"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Link Video</Form.Label>
            <Form.Control
              type="text"
              placeholder="Link Video"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Chapter</Form.Label>
            <Form.Control
              type="number"
              placeholder="Chapter"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
            <Form.Label>Premium</Form.Label>
            <Form.Control as="select" autoFocus className="form-modal-admin">
              <option value="premium">Premium</option>
              <option value="gratis">Gratis</option>
            </Form.Control>
          </Form.Group>
        </Accordion.Body>
      ),
    };
    setAccordionItems([...accordionItems, newAccordion]);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-form-wrapper"
    >
      <Modal.Header
        closeButton
        className="modal-header-admin flex-column-reverse"
      >
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          Tambah Kelas
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form>
          <Form.Group className="mb-3" controlId="namaKelas">
            <Form.Label>Nama Kelas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nama Kelas"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Kategori</Form.Label>
            <Form.Control
              type="text"
              placeholder="Kategori"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Kode Kelas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Kode Kelas"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Tipe Kelas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tipe Kelas"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Level</Form.Label>
            <Form.Control
              type="text"
              placeholder="Level"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Harga</Form.Label>
            <Form.Control
              type="text"
              placeholder="Harga"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 "
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Materi</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Materi"
              className="form-modal-admin-materi"
            />
          </Form.Group>
          <Accordion className="mb-4">
            {accordionItems.map((item) => (
              <Accordion.Item key={item.id} eventKey={String(item.id)}>
                <Accordion.Header>{item.header}</Accordion.Header>
                {item.body}
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="d-flex justify-content-between gap-2">
            <Button onClick={addAccordionItem} className="btn-upload">
              Tambah Video
            </Button>
            <Button onClick={props.onHide} className="btn-simpan">
              Simpan
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-footer-admin"></Modal.Footer>
    </Modal>
  );
};

export default ModalUbahKelas;
