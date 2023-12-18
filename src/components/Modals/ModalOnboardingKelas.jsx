import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../styles/ModalOnboardingKelas.css";

import onboarding from "../../assets/group.svg";

const ModalOnboardingKelas = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        className="modal-header-onboarding flex-column-reverse border-0"
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-center modal-title-onboarding"
        >
          Onboarding...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-onboarding">

          <div className="image-wrapper d-flex align-items-center justify-content-center">
            <img src={onboarding} alt="" className="mb-3 " />
          </div>
          <div className="text-wrapper">
            <h6 className="text-center py-3 persiapan">
              Persiapkan hal berikut untuk belajar yang maksimal:
            </h6>
            <p className="text-center py-3 requires">
              Mempunyai akun Figma atau Install Adobe XD Menggunakan internet
              minimal kecepatan 2Mbps Belajar di tempat yang nyaman
            </p>
          </div>

      </Modal.Body>
      <Modal.Footer className="modal-footer-beli d-flex justify-content-center border-0 ">
        <Link to={`/detail-kelas/${props.kode}`} className="text-decoration-none">
        <Button
          onClick={props.onHide}
          className="btn-onboarding d-flex justify-content-center align-items-center gap-2"
        >
          Ikuti Kelas
        </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

ModalOnboardingKelas.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  kode: PropTypes.string,
};

export default ModalOnboardingKelas;
