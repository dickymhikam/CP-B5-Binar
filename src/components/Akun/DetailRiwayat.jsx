import "../../styles/Riwayat.css";

import book from "../../assets/book.svg";
import star from "../../assets/ic_round-star.svg";
import permata from "../../assets/permata.svg";
import time from "../../assets/ri_time-fill.svg";
import badge from "../../assets/mdi_badge-outline.svg";
import main from "../../assets/image.png";

const DetailRiwayatPembayaran = () => {
  return (
    <>
      <div className="detail-riwayat-wrapper">
        <div className="detail-riwayat-header">Riwayat Pembayaran</div>
        <div className="detail-riwayat-card">
          {/* card */}
          <div className="container d-flex justify-content-center">
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 card-riwayat-wrapper">
              <div className="col px-0 d-flex justify-content-center">
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
                      <button className="btn-buy bg-danger">
                        <img src={permata} /> Waiting for Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col px-0 d-flex justify-content-center">
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
                      <button className="btn-buy bg-danger">
                        <img src={permata} /> Waiting for Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col px-0 d-flex justify-content-center">
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
                      <button className="btn-buy bg-success">
                        <img src={permata} /> Paid
                      </button>
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

export default DetailRiwayatPembayaran;
