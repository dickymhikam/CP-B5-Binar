// import React from "react";
import book from "../../assets/book.svg";
import star from "../../assets/ic_round-star.svg";
// import permata from "../assets/permata.svg";
import time from "../../assets/ri_time-fill.svg";
import badge from "../../assets/mdi_badge-outline.svg";
import main from "../../assets/image.png";
import ProgressBar from "react-bootstrap/ProgressBar";
// import "../styles/KelasBerjalan.css";

const CardKelas = () => {
  const now1 = 90;
  const now2 = 50;
  const now3 = 70;
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
      <div className="col d-flex justify-content-center">
        <div className="card">
          <img src={main} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">UI/UX</h5>
              <span className="rate">
                <img src={star} className="icon-star mb-sm-1" />
                4.7
              </span>
            </div>
            <p className="card-text mb-1">Belajar Web Designer dengan Figma</p>
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
            <ProgressBar
              now={now1}
              label={`${now1}% Complete`}
              className="progress-belajar"
            />
          </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center">
        <div className="card">
          <img src={main} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">UI/UX</h5>
              <span className="rate">
                <img src={star} className="icon-star mb-sm-1" />
                4.7
              </span>
            </div>
            <p className="card-text mb-1">
              Membuat Wireframe Hingga ke Visual Design
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
            <ProgressBar
              now={now2}
              label={`${now2}% Complete`}
              className="progress-belajar"
            />
          </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center">
        <div className="card">
          <img src={main} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">UI/UX</h5>
              <span className="rate">
                <img src={star} className="icon-star mb-sm-1" />
                4.7
              </span>
            </div>
            <p className="card-text mb-1">Pengenalan tentang Design System</p>
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
            <ProgressBar
              now={now3}
              label={`${now3}% Complete`}
              className="progress-belajar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardKelas;
