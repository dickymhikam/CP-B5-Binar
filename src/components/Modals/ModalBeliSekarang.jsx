import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import book from "../../assets/clarity_book-line.svg";
import star from "../../assets/ic_round-star.svg";
import time from "../../assets/ri_time-fill.svg";
import badge from "../../assets/mdi_badge-outline.svg";
import arrow from "../../assets/carbon_next-filled.svg";

import "../../styles/ModalBeliSekarang.css";

import { createOrder } from "../../services/api";

const BeliSekarang = (props) => {
  const [courseDetail, setCourseDetail] = useState(null);
  const [orderCode, setOrderCode] = useState(null);

  useEffect(() => {
    setCourseDetail(props.course);
  }, [props.course]);

  const formatCurr = (value) => {
    const formattedValue = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
    return formattedValue;
  };

  const handleBeliKelas = async (kode) => {
    setOrderCode(await createOrder(kode));
  };

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
            <img src={courseDetail?.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="d-flex justify-content-between ">
                <h5 className="card-title text-truncate">
                  {courseDetail?.kategori}
                </h5>
                <div className="icon-star">
                  <img src={star}/>
                  <p>{courseDetail?.rating}</p>
                </div>
              </div>
              <p className="card-text mb-1 text-truncate">
                {courseDetail?.namaKelas}
              </p>
              <p className="mentor m-0">{`by ${courseDetail?.author}`}</p>
              <div className="writing-learn d-flex gap-3">
                <p className="writing-level">
                  <img src={badge} />
                  {`${courseDetail?.level} Level`}
                </p>
                <p>
                  <img src={book} />
                  {`${courseDetail?.modul} Modul`}
                </p>
                <p>
                  <img src={time} />
                  {`${courseDetail?.time} Menit`}
                </p>
              </div>
              <button className="btn-buy">{`Beli ${formatCurr(
                courseDetail?.harga
              )}`}</button>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer-beli d-flex justify-content-center border-0 ">
        <Link
          to={`/detail-pembayaran/${courseDetail?.kodeKelas}/${orderCode}`}
          className="text-decoration-none"
        >
          <Button
            onClick={() => {
              props.onHide();
              handleBeliKelas(courseDetail?.kodeKelas);
            }}
            className="btn-buy-kelas-modal d-flex justify-content-center align-items-center gap-2"
          >
            Beli Sekarang <img src={arrow} alt="" />
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

BeliSekarang.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  course: PropTypes.object,
};

export default BeliSekarang;