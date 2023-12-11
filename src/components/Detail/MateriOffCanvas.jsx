import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
// import btnList from "../assets/fi_list.svg";
// import { Link } from "react-router-dom";
import check from "../../assets/mdi_progress-check.svg";
import ProgressBar from "react-bootstrap/ProgressBar";
import playBtn from "../../assets/playBtn.svg";
import lockIcon from "../../assets/bxs_lock.svg";
import iconNext from "../../assets/carbon_next-filled.svg";

const MateriOffCanvas = () => {
  const now1 = 50;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="sidebar-admin-offcanvas">
      <Button
        className="btn-materi d-flex align-items-center gap-2"
        onClick={handleShow}
      >
        Materi
        <img src={iconNext} alt="" />
      </Button>

      <Offcanvas
        className="sidebar-offcanvas-body"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header className="d-flex flex-column-reverse">
          <div className="header-offcanvas-materi w-100 d-flex justify-content-between align-items-center pt-3">
            <h6 className="m-0 fs-6 materi-belajar">Materi Belajar</h6>
            <div className="check-progress d-flex justify-content-between gap-1">
              <img src={check} />
              <ProgressBar
                now={now1}
                label={`${now1}% `}
                className="progress-belajar w-100"
              />
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="materi-wrapper">
            <div className="materi-gratis py-2">
              <div className="materi-gratis-header d-flex justify-content-between">
                <h6 className="tagline-materi">Chapter 1 - Pendahuluan</h6>
                <h6 className="waktu-materi">60 Menit</h6>
              </div>
              <div className="materi-gratis-list">
                <div className="materi-item d-flex align-items-center gap-2 py-2 border-bottom">
                  <div className="nomor-materi d-flex align-items-center justify-content-center">
                    1
                  </div>
                  <div className="title-play d-flex align-items-center justify-content-between gap-3">
                    <div className="title-materi-offcanvas">
                      Tujuan Mengikuti Kelas Design System
                    </div>
                    <div className="play-btn ">
                      <img src={playBtn} alt="" />
                    </div>
                  </div>
                </div>
                <div className="materi-item d-flex align-items-center gap-2 py-2 border-bottom">
                  <div className="nomor-materi d-flex align-items-center justify-content-center">
                    2
                  </div>
                  <div className="title-play d-flex align-items-center justify-content-between gap-3">
                    <div className="title-materi-offcanvas">
                      Pengenalan Design System
                    </div>
                    <div className="play-btn ">
                      <img src={playBtn} alt="" />
                    </div>
                  </div>
                </div>
                <div className="materi-item d-flex align-items-center gap-2 py-2 border-bottom">
                  <div className="nomor-materi d-flex align-items-center justify-content-center">
                    3
                  </div>
                  <div className="title-play d-flex align-items-center justify-content-between gap-3">
                    <div className="title-materi-offcanvas">
                      Contoh Dalam Membangun Design System
                    </div>
                    <div className="play-btn">
                      <img src={playBtn} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="materi-premium py-2">
              <div className="materi-gratis py-3">
                <div className="materi-gratis-header d-flex justify-content-between">
                  <h6 className="tagline-materi">Chapter 2 - Memulai Design</h6>
                  <h6 className="waktu-materi">120 Menit</h6>
                </div>
                <div className="materi-gratis-list">
                  <div className="materi-item d-flex align-items-center gap-2 py-2 border-bottom">
                    <div className="nomor-materi d-flex align-items-center justify-content-center">
                      4
                    </div>
                    <div className="title-play d-flex align-items-center justify-content-between gap-3">
                      <div className="title-materi-offcanvas">
                        Color Palette
                      </div>
                      <div className="lock-btn ">
                        <img src={lockIcon} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="materi-item d-flex align-items-center gap-2 py-2 border-bottom">
                    <div className="nomor-materi d-flex align-items-center justify-content-center">
                      5
                    </div>
                    <div className="title-play d-flex align-items-center justify-content-between gap-3">
                      <div className="title-materi-offcanvas">
                        Typography, Layout dan Grid
                      </div>
                      <div className="lock-btn ">
                        <img src={lockIcon} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="materi-item d-flex align-items-center gap-2 py-2 border-bottom">
                    <div className="nomor-materi d-flex align-items-center justify-content-center">
                      6
                    </div>
                    <div className="title-play d-flex align-items-center justify-content-between gap-3">
                      <div className="title-materi-offcanvas">
                        Membuat Components
                      </div>
                      <div className="lock-btn">
                        <img src={lockIcon} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="materi-item d-flex align-items-center gap-2 py-2 border-bottom">
                    <div className="nomor-materi d-flex align-items-center justify-content-center">
                      7
                    </div>
                    <div className="title-play d-flex align-items-center justify-content-between gap-3">
                      <div className="title-materi-offcanvas">
                        Membuat Components
                      </div>
                      <div className="lock-btn">
                        <img src={lockIcon} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="materi-item d-flex align-items-center gap-2 py-2 border-bottom">
                    <div className="nomor-materi d-flex align-items-center justify-content-center">
                      8
                    </div>
                    <div className="title-play d-flex align-items-center justify-content-between gap-3">
                      <div className="title-materi-offcanvas">
                        Membuat Components
                      </div>
                      <div className="lock-btn">
                        <img src={lockIcon} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="materi-item d-flex align-items-center gap-2 py-2 border-bottom">
                    <div className="nomor-materi d-flex align-items-center justify-content-center">
                      9
                    </div>
                    <div className="title-play d-flex align-items-center justify-content-between gap-3">
                      <div className="title-materi-offcanvas">
                        Membuat Components
                      </div>
                      <div className="lock-btn">
                        <img src={lockIcon} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="materi-item d-flex align-items-center gap-2 py-2 border-bottom">
                    <div className="nomor-materi d-flex align-items-center justify-content-center">
                      10
                    </div>
                    <div className="title-play d-flex align-items-center justify-content-between gap-3">
                      <div className="title-materi-offcanvas">
                        Membuat Components
                      </div>
                      <div className="lock-btn">
                        <img src={lockIcon} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="materi-item d-flex align-items-center gap-2 py-2 border-bottom">
                    <div className="nomor-materi d-flex align-items-center justify-content-center">
                      11
                    </div>
                    <div className="title-play d-flex align-items-center justify-content-between gap-3">
                      <div className="title-materi-offcanvas">
                        Membuat Asset
                      </div>
                      <div className="lock-btn">
                        <img src={lockIcon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MateriOffCanvas;
