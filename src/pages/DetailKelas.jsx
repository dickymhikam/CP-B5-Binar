import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Nav from "../components/Home/Nav";
import DetailAbout from "../components/Detail/DetailAbout";
import DetailMateri from "../components/Detail/DetailMateri";
import Footer from "../components/Home/Footer";
import NavbarBottom from "../components/Home/NavbarBottom";
import MateriOffCanvas from "../components/Detail/MateriOffCanvas";

import btnBack from "../assets/fi_arrow-left-black.svg";
import book from "../assets/book.svg";
import star from "../assets/ic_round-star.svg";
import btnJoin from "../assets/gridicons_chat.svg";
import time from "../assets/ri_time-fill.svg";
import badge from "../assets/mdi_badge-outline.svg";
import play from "../assets/playvideo.svg";

import "../styles/DetailKelas.css";
import "../styles/DetailKelasKonten.css";
import "../styles/DetailKelasMateri.css";
import "../styles/DetailKelasOff.css";
import {getDetailCourse} from "../services/api.js"

const DetailKelas = () => {
  const {kode} = useParams();
  const [courseDetail, setCourseDetail] = useState(null);

  useEffect(() => {
    getDetailCourse(kode)
      .then((data) => {
        setCourseDetail(data);
      })
      .catch((error) => {
        console.error("Error fetching course list:", error);
      });
  }, [kode]);

  return (
    <>
      <Nav />
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
              <div className="detail-card-body-title text-tuncrate">
                <h5>{courseDetail?.kategori}</h5>
                <span className="rate">
                  <img src={star} />
                    {courseDetail?.rating}
                </span>
              </div>
              <h2 className="text-tuncrate">{courseDetail?.namaKelas}</h2>
              <h3>{`by ${courseDetail?.author}`}</h3>
              <div className="detail-card-body-stats">
                <div className="detail-stat">
                  <img src={badge} />
                  {`${courseDetail?.level} Level`}
                </div>
                <div className="detail-stat">
                  <img src={book} />
                  {`${courseDetail?.modul} Modul`}
                </div>
                <div className="detail-stat">
                  <img src={time} />
                  {`${courseDetail?.time} Menit`}
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3">
                <Link to={"https://t.me/+ye__8CV4A_s5NzI9"} className="text-decoration-none">
                  <button className="detail-card-body-btn">
                    <p>Join Grup Telegram</p>
                    <img src={btnJoin} />
                  </button>
                </Link>
                <MateriOffCanvas courseDetail={courseDetail} />
              </div>
            </div>
          </div>
          <div className="detail-header-video mb-2">
            {/* <div className="body-header"> */}
              <img src={play} alt="" />
            {/* </div> */}
          </div>
        </div>
        <div className="detail-kelas-body">
          <div className="detail-body-about">
            <DetailAbout courseDetail={courseDetail} />
          </div>
          <div className="detail-body-materi ">
            <DetailMateri courseDetail={courseDetail}/>
          </div>
        </div>
      </div>
      <Footer />
      <NavbarBottom />
    </>
  );
};

export default DetailKelas;
