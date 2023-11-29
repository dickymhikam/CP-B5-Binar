import book from "../../assets/book.svg";
import star from "../../assets/ic_round-star.svg";
import permata from "../../assets/permata.svg";
import time from "../../assets/ri_time-fill.svg";
import badge from "../../assets/mdi_badge-outline.svg";
import main from "../../assets/image.png";

import { Link } from "react-router-dom";

const CardTopikKelas = () => {
  return (
    <>
    <Link to={"/detail-kelas"} className="text-decoration-none text-dark">
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
            <button className="btn-buy">
              <img src={permata} /> Beli Rp 240.000
            </button>
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
            <button className="btn-buy">
              <img src={permata} /> Beli Rp 240.000
            </button>
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
            <button className="btn-buy">
              <img src={permata} /> Beli Rp 240.000
            </button>
          </div>
        </div>
      </div>
    </div>
    </Link>
    </>
  );
};

export default CardTopikKelas;
