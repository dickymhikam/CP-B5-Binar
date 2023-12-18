import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { PlayCircleFill } from "react-bootstrap-icons";

import check from "../../assets/mdi_progress-check.svg";
import ProgressBar from "react-bootstrap/ProgressBar";
import iconNext from "../../assets/carbon_next-filled.svg"; 

const MateriOffCanvas = ({ courseDetail }) => {
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
                now={courseDetail?.progress}
                label={`${courseDetail?.progress}% `}
                className="progress-belajar w-100"
              />
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="materi-wrapper">
            {courseDetail?.getChapterResponses?.map((chapter, index) => (
              <div className="materi-gratis py-2" key={index}>
                <div className="materi-gratis-header d-flex justify-content-between">
                  <h6 className="tagline-materi">{`Chapter ${chapter.noChapter} - ${chapter.judulChapter}`}</h6>
                  <h6 className="waktu-materi">{`${chapter.time} Menit`}</h6>
                </div>
                <div className="materi-gratis-list">
                  {chapter.getVideoResponses?.map((video, videoIndex) => (
                  <div className="materi-item d-flex align-items-center justify-content-between gap-2 py-2 border-bottom" key={videoIndex}>
                    <div className="title-play d-flex align-items-center justify-content-between gap-3">
                      <div className="nomor-materi d-flex align-items-center justify-content-center">
                        {videoIndex + 1}
                      </div>
                      <div className="title-materi-offcanvas">
                        {video.judulVideo}
                      </div>
                    </div>
                    <div className="play-btn ">
                      {video.premium ? (
                        <img src={filock} alt="" className="icon-lock" />
                        ) : (
                        <PlayCircleFill className="icon-play" />
                      )}
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MateriOffCanvas;
