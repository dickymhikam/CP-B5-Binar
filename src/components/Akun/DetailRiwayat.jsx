// import React from "react";
import "../../styles/Riwayat.css"
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
            <div className="detail-riwayat-header">
                Riwayat Pemabayaran
            </div>
            <div className="detail-riwayat-card">
                {/* card */}
                <div className="container d-flex justify-content-center">
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 card-riwayat-wrapper">
                    <div className="col px-0 d-flex justify-content-center">
                        <div className="card ">
                        <img src={main} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="d-flex justify-content-between ">
                            <h5 className="card-riwayat-title">UI/UX Design</h5>
                            <span className="rate">
                                <img src={star} className="icon-star mb-sm-1" />
                                4.7
                            </span>
                            </div>
                            <p className="card-riwayat-text mb-1">
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
                            <button className="btn-buy bg-danger">
                            <img src={permata} /> Waiting for Payment
                            </button>
                        </div>
                        </div>
                    </div>

                    <div className="col px-0 d-flex justify-content-center">
                        <div className="card">
                        <img src={main} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                            <h5 className="card-riwayat-title">UI/UX Design</h5>
                            <span className="rate">
                                <img src={star} className="icon-star mb-sm-1" />
                                4.7
                            </span>
                            </div>
                            <p className="card-riwayat-text mb-1">
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
                            <button className="btn-buy bg-success">
                            <img src={permata} />Paid
                            </button>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col px-0 d-flex justify-content-center">
                        <div className="card">
                        <img src={main} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                            <h5 className="card-riwayat-title">UI/UX Design</h5>
                            <span className="rate">
                                <img src={star} className="icon-star mb-sm-1" />
                                4.7
                            </span>
                            </div>
                            <p className="card-riwayat-text mb-1">
                            Pengenalan tentang Design System
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
                            <button className="btn-buy bg-success">
                            <img src={permata} />Paid
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DetailRiwayatPembayaran