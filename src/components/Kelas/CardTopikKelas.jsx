import { useState } from "react";

import book from "../../assets/book.svg";
import star from "../../assets/ic_round-star.svg";
import permata from "../../assets/permata.svg";
import time from "../../assets/ri_time-fill.svg";
import badge from "../../assets/mdi_badge-outline.svg";
import main from "../../assets/image.png";

import ModalBeliSekarang from "../Modals/ModalBeliSekarang";

// import { Link } from "react-router-dom";

const CardTopikKelas = () => {
  const [modalShowBeli, setModalShowBeli] = useState(false);
  return (
    <>
      {/* <Link to={"/detail-kelas"} className="text-decoration-none text-dark"> */}
      
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 py-3 card-kursus-wrapper">
          <div className="col px-0 d-flex justify-content-center card-kursus-home">
            <div className="card my-2">
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
            <div className="card my-2">
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
            <div className="card my-2">
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

      {/* </Link> */}
    </>
  );
};

export default CardTopikKelas;
