import { Link } from "react-router-dom";
import "../styles/DetailKelas.css";
import "../styles/DetailKelasKonten.css";
import "../styles/DetailKelasMateri.css"
import "../styles/DetailKelasOff.css";
import Nav from "../components/Home/Nav";
import btnBack from "../assets/fi_arrow-left-black.svg";
import book from "../assets/book.svg";
import star from "../assets/ic_round-star.svg";
import btnJoin from "../assets/gridicons_chat.svg";
import time from "../assets/ri_time-fill.svg";
import badge from "../assets/mdi_badge-outline.svg";

const DetailKelas = () => {
  return (
    <>
        {/* Navbar */}
        <Nav />
        {/* Background */}
        <div className="detail-kelas-bg"></div>
        {/* Detail-kelas */}
        <div className="detail-kelas-wrapper">
            <div className="detail-kelas-header">
                <div className="detail-header-card">
                    <div className="detail-card-text">
                        <Link to={"/kelas-saya"}>
                            <img src={btnBack} />
                        </Link>
                        <h3>Kelas Lainnya</h3>
                    </div>
                    <div className="detail-card-body">
                        <div className="detail-card-body-title">
                            <h5>UI/UX Design</h5>
                            <span className="rate">
                                <img src={star} />
                                5.0
                            </span>
                        </div>
                        <h2>Intro to Basic of User Interaction Design</h2>
                        <h3>by Simon Doe</h3>
                        <div className="detail-card-body-stat">
                            <p><img src={badge} />Beginner Level</p>
                            <p><img src={book} />5 modul</p>
                            <p><img src={time} />45 menit</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="detail-card-body-btn">
                                <p>Join Grup Telegram</p>
                                <img src={btnJoin} />
                            </button>
                            <button className="w-25">
                                Mas Adimas (offcanvas)
                            </button>
                        </div>
                    </div>
                </div>
                <div className="detail-header-video">
                    Mas Awang (video)
                </div>
            </div>
            <div className="detail-kelas-body">
                <div className="detail-body-about">
                    Mas Awang (text tentang kelas)
                </div>
                <div className="detail-body-materi">Mas Dicky (materi)</div>
            </div>
        </div>
    </>
  )
}

export default DetailKelas