// import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/ModalBeliSekarang.css";

import book from "../assets/clarity_book-line.svg";
import star from "../assets/ic_round-star.svg";
import time from "../assets/ri_time-fill.svg";
import badge from "../assets/mdi_badge-outline.svg";
import main from "../assets/image.png";
import arrow from "../assets/carbon_next-filled.svg";

const BeliSekarang = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        className="modal-header-beli flex-column-reverse border-0"
      >
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          <h2 className="tagline-beli-1">Selangkah Lagi menuju</h2>
          <h2 className="tagline-beli-2">Kelas Premium</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-beli py-0">
        <div className="container d-flex justify-content-center align-items-center container-beli">
          <div className="card ">
            <img src={main} className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="d-flex justify-content-between ">
                <h5 className="card-title">UI/UX</h5>
                <span className="rate">
                  <img src={star} className="icon-star mb-sm-1" />
                  4.7
                </span>
              </div>
              <p className="card-text mb-1">
                Belajar Web Designer dengan Figma
              </p>
              <p className="mentor">by Angela Doe</p>
              <div className="writing-learn d-flex justify-content-around">
                <p>
                  <img src={badge} />
                  Intermediate Level
                </p>
                <p>
                  <img src={book} />
                  10 modul
                </p>
                <p>
                  <img src={time} />
                  120 menit
                </p>
              </div>
              <button className="btn-buy">Beli Rp 240.000</button>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer-beli d-flex justify-content-center border-0">
        <Button
          onClick={props}
          className="btn-beli d-flex justify-content-center align-items-center gap-2"
        >
          Beli Sekarang <img src={arrow} alt="" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BeliSekarang;
