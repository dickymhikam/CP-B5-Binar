import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import book from "../../assets/book.svg";
import star from "../../assets/ic_round-star.svg";
import permata from "../../assets/permata.svg";
import time from "../../assets/ri_time-fill.svg";
import badge from "../../assets/mdi_badge-outline.svg";

import "../../styles/Riwayat.css";
import { getPaymentHistory } from "../../services/api";

const DetailRiwayatPembayaran = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    getPaymentHistory().then((result) => {
      result.sort((a, b) => (a.completePaid ? 1 : -1));
      setPaymentHistory(result);
    });
  }, []);

  return (
    <>
      <div className="detail-riwayat-wrapper">
        <div className="detail-riwayat-header">Riwayat Pembayaran</div>
        <div className="detail-riwayat-card">
          <div className="container d-flex justify-content-center">
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 card-riwayat-wrapper">
              {paymentHistory.map((payment, index) => (
                <div
                  key={index}
                  className="col px-0 d-flex justify-content-center">
                  <div className="card ">
                    <Link to={`/detail-kelas/${payment.kodeKelas}`}>
                      <img
                        src={payment.imageUrl}
                        className="card-img-top"
                        alt="..."
                        />
                    </Link>
                    <div className="card-body">
                      <div className="d-flex justify-content-between ">
                        <h5 className="card-title text-truncate">
                          {payment.kategori}
                        </h5>
                        <div className="icon-star">
                          <img src={star}/>
                          <p className="m-0">{payment.rating}</p>
                        </div>
                      </div>

                      <p className="about-class mb-0 text-truncate">
                        {payment.namaKelas}
                      </p>
                      <div className=" pb-0  w-100">
                        <p className="mentor mb-md-0">{payment.author}</p>
                        <div className="writing-learn d-flex gap-4">
                          <p>
                            <img src={badge} />
                            {`${payment.level} Level`}
                          </p>

                          <p>
                            <img src={book} />
                            {`${payment.modul} Modul`}
                          </p>
                          <p>
                            <img src={time} />
                            {`${payment.time} Menit`}
                          </p>
                        </div>
                        {payment.completePaid ? (
                          
                            <button className="btn-buy btn-paid">
                              <img src={permata} alt="Permata Icon" /> Paid
                            </button>
                        ) : (
                          <Link
                            to={`/detail-pembayaran/${payment.kodeKelas}/${payment.orderCode}`}
                          >
                            <button className="btn-buy btn-not-paid">
                              <img src={permata} alt="Permata Icon" /> Waiting
                              for Payment
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailRiwayatPembayaran;