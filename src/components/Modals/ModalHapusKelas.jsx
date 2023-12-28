import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import warning from "../../assets/warning.svg";

import "../../styles/Admin/ModalHapusKelas.css";

import { deleteCourse } from "../../services/apiAdmin";

const ModalHapusKelas = (props) => {
  const handleDeleteCourse = async (idCourse) => {
    try {
      await deleteCourse(idCourse);
      window.location.reload();
    } catch (error) {
      console.error("error deleting course", error);
    }
  };

  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          className="modal-header-hapus flex-column-reverse border-0"
        >
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-center modal-title-hapus"
          ></Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-hapus">
          <div className="d-flex align-items-center justify-content-center">
            <img src={warning} alt="" className="icon-warning" />
          </div>
          <h6 className="text-validate">
            {`Apakah anda yakin untuk menghapus Course "${props.namakelas}" ?`}
          </h6>
        </Modal.Body>
        <Modal.Footer className="modal-footer-hapus d-flex justify-content-center border-0 ">
          <Button
            onClick={() => {
              handleDeleteCourse(props.kode);
              props.onHide();
            }}
            className="btn-modal-delete "
          >
            Hapus Kelas
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ModalHapusKelas.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  kode: PropTypes.string,
  namakelas: PropTypes.string,
};

export default ModalHapusKelas;
