import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "../../styles/ModalTambahKelas.css";

const ModalUbahKelas = (props) => {
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
          Ubah Kelas
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nama Kelas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nama Kelas"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Kategori</Form.Label>
            <Form.Control
              type="text"
              placeholder="Kategori"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Kode Kelas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Kode Kelas"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tipe Kelas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tipe Kelas"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Level</Form.Label>
            <Form.Control
              type="text"
              placeholder="Level"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Harga</Form.Label>
            <Form.Control
              type="text"
              placeholder="Harga"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Materi</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Materi"
              className="form-modal-admin-materi"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-footer-admin">
        <Button onClick={props} className="btn-upload">
          Upload Video
        </Button>
        <Button onClick={props} className="btn-simpan">
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUbahKelas;
