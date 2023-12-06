import { useState } from "react";
// import { Link } from "react-router-dom";

import "../../styles/CardKursus.css";

import book from "../../assets/book.svg";
import star from "../../assets/ic_round-star.svg";
import permata from "../../assets/permata.svg";
import time from "../../assets/ri_time-fill.svg";
import badge from "../../assets/mdi_badge-outline.svg";
import main from "../../assets/image.png";

import ModalBeliSekarang from "../Modals/ModalBeliSekarang";

const CardKursus = () => {
  const [modalShowBeli, setModalShowBeli] = useState(false);

  return (
    <>
      {/* Header */}
      <div className="type-container">
        <div className="row">
          <div className="type-header">
            <h2>Kursus Populer</h2>
            <p className="">Lihat Semua</p>
          </div>
          <div className="col-sm-12 text-center mt-2">
            <button className="btn-class mt-1 mb-2">All</button>
            <button className="btn-class ">Data Science</button>
            <button className="btn-class">UI/UX Design</button>
            <button className="btn-class">Android Development</button>
            <button className="btn-class mb-2">Web Development</button>
            <button className="btn-class">IOS Development</button>
            <button className="btn-class">Business Intelligence</button>
          </div>
        </div>
      </div>

      {/* Card */}
      
      <div className="type-container-card">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 py-3 card-kursus-wrapper">
          <div className="col px-0 d-flex justify-content-center card-kursus-home">
            <div className="card ">
              <img src={main} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex justify-content-between ">
                  <h5 className="card-title text-truncate">
                    Business Intelligence 
                  </h5>
                  <div className="d-flex justify-content-center  align-items-start">
                    <img src={star} className="icon-star mt-md-1" />
                    <p className="m-0">4.7</p>
                  </div>
                </div>

                <p className="about-class mb-0 text-truncate">
                  Membuat Wireframe Hingga ke Visual Design
                </p>
                <div className=" pb-0  w-100">
                  <p className="mentor mb-md-0">by Angela Doe</p>
                  <div className="writing-learn d-flex justify-content-between">
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
                  <div className="btn-wrapper">
                    <button
                      className="btn-buy"
                      onClick={() => setModalShowBeli(true)}
                    >
                      <img src={permata} /> Beli Rp 240.000
                    </button>
                    <ModalBeliSekarang
                      show={modalShowBeli}
                      onHide={() => setModalShowBeli(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col px-0 d-flex justify-content-center card-kursus-home">
            <div className="card ">
              <img src={main} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex justify-content-between ">
                  <h5 className="card-title">UI / UX</h5>
                  <div className="d-flex justify-content-center  align-items-start">
                    <img src={star} className="icon-star mt-md-1" />
                    <p className="m-0">4.7</p>
                  </div>
                </div>
                <div className="desc-wrapper">
                  <p className="about-class mb-0">Membuat Wireframe Design</p>
                  <div className=" pb-0 align-self-start w-100">
                    <p className="mentor mb-md-0">by Angela Doe</p>
                    <div className="writing-learn d-flex justify-content-between">
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
                    <div className="btn-wrapper">
                      <button
                        className="btn-buy"
                        onClick={() => setModalShowBeli(true)}
                      >
                        <img src={permata} /> Beli Rp 240.000
                      </button>
                      <ModalBeliSekarang
                        show={modalShowBeli}
                        onHide={() => setModalShowBeli(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col px-0 d-flex justify-content-center card-kursus-home">
            <div className="card ">
              <img src={main} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex justify-content-between ">
                  <h5 className="card-title">UI / UX</h5>
                  <div className="d-flex justify-content-center  align-items-start">
                    <img src={star} className="icon-star mt-md-1" />
                    <p className="m-0">4.7</p>
                  </div>
                </div>
                <div className="desc-wrapper">
                  <p className="about-class mb-0">Membuat Wireframe Design</p>
                  <div className=" pb-0 align-self-start w-100">
                    <p className="mentor mb-md-0">by Angela Doe</p>
                    <div className="writing-learn d-flex justify-content-between">
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
                    <div className="btn-wrapper">
                      <button
                        className="btn-buy"
                        onClick={() => setModalShowBeli(true)}
                      >
                        <img src={permata} /> Beli Rp 240.000
                      </button>
                      <ModalBeliSekarang
                        show={modalShowBeli}
                        onHide={() => setModalShowBeli(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardKursus;
