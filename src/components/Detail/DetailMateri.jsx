// import React from 'react'
import filock from "../../assets/fi_lock.svg";
import ficheck from "../../assets/fi_check.svg";
import ProgressBar from "react-bootstrap/ProgressBar";
import { PlayCircleFill } from "react-bootstrap-icons";

const DetailMateri = () => {
  const now1 = 30;
  return (
    <>
      <div className="container">
        <div className="header-materi">
          <p>Materi Belajar</p>
          <div className="d-flex">
            <img src={ficheck} alt="icon-check" className="icon-check" />
            <ProgressBar
              now={now1}
              label={`${now1}% Complete`}
              className="progress-materi"
              q
            />
          </div>
        </div>

        <div className="chapter1">
          {/* Header */}
          <div className="header-chapter1">
            <p className="text-chapter">Chapter 1 - Pendahuluan</p>
            <p className="text-time">60 Menit</p>
          </div>
          {/* body */}
          <div className="body-chapter1">
            <div className="materi">
              <div className="number-materi ">
                <p className="mt-3">1</p>
              </div>
              <div className="text-materi  mx-auto border-bottom py-2 ">
                <p className="text-title mb-0">Color Palette</p>
                <div className="icon">
                  <PlayCircleFill className="icon-play text-end" />
                </div>
              </div>
            </div>
            <div className="materi">
              <div className="number-materi rounded-circle">
                <p className="mt-3">2</p>
              </div>
              <div className="text-materi  mx-auto border-bottom py-2 ">
                <p className="text-title mb-0">Pengenalan Design System</p>
                <PlayCircleFill className="icon-play" />
              </div>
            </div>
            <div className="materi">
              <div className="number-materi rounded-circle">
                <p className="mt-3">3</p>
              </div>
              <div className="text-materi  mx-auto border-bottom py-2 ">
                <p className="text-title mb-0">
                  Contoh Dalam Membangun Design System
                </p>
                <PlayCircleFill className="icon-play" />
              </div>
            </div>
          </div>
        </div>

        <div className="chapter2">
          {/* Header */}
          <div className="header-chapter1">
            <p className="text-chapter">Chapter 2 - Memulai Desain</p>
            <p className="text-time">120 Menit</p>
          </div>
          {/* body */}
          <div className="body-chapter1">
            <div className="materi">
              <div className="number-materi rounded-circle">
                <p className="mt-3">4</p>
              </div>
              <div className="text-materi  mx-auto border-bottom py-2 ">
                <p className="text-title mb-0">Color Palette</p>
                <img src={filock} alt="" className="icon-lock" />
              </div>
            </div>
            <div className="materi">
              <div className="number-materi rounded-circle">
                <p className="mt-3">5</p>
              </div>
              <div className="text-materi  mx-auto border-bottom py-2 ">
                <p className="text-title mb-0">Typography, Layout dan Grid</p>
                <img src={filock} alt="" className="icon-lock" />
              </div>
            </div>
            <div className="materi">
              <div className="number-materi rounded-circle">
                <p className="mt-3">6</p>
              </div>
              <div className="text-materi  mx-auto border-bottom py-2 ">
                <p className="text-title mb-0">Membuat Components</p>
                <img src={filock} alt="" className="icon-lock" />
              </div>
            </div>
            <div className="materi">
              <div className="number-materi rounded-circle">
                <p className="mt-3">7</p>
              </div>
              <div className="text-materi  mx-auto border-bottom py-2 ">
                <p className="text-title mb-0">Membuat Components</p>
                <img src={filock} alt="" className="icon-lock" />
              </div>
            </div>
            <div className="materi">
              <div className="number-materi rounded-circle">
                <p className="mt-3">8</p>
              </div>
              <div className="text-materi  mx-auto border-bottom py-2 ">
                <p className="text-title mb-0">Membuat Components</p>
                <img src={filock} alt="" className="icon-lock" />
              </div>
            </div>
            <div className="materi">
              <div className="number-materi rounded-circle">
                <p className="mt-3">9</p>
              </div>
              <div className="text-materi  mx-auto border-bottom py-2 ">
                <p className="text-title mb-0">Membuat Components</p>
                <img src={filock} alt="" className="icon-lock" />
              </div>
            </div>
            <div className="materi">
              <div className="number-materi rounded-circle">
                <p className="mt-3">10</p>
              </div>
              <div className="text-materi  mx-auto border-bottom py-2 ">
                <p className="text-title mb-0">Membuat Components</p>
                <img src={filock} alt="" className="icon-lock" />
              </div>
            </div>
            <div className="materi">
              <div className="number-materi rounded-circle">
                <p className="mt-3">11</p>
              </div>
              <div className="text-materi  mx-auto border-bottom py-2 ">
                <p className="text-title mb-0">Membuat Asset</p>
                <img src={filock} alt="" className="icon-lock" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMateri;
