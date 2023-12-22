import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { PlayCircleFill } from "react-bootstrap-icons";

import filock from "../../assets/fi_lock.svg";
import check from "../../assets/mdi_progress-check.svg";
import ProgressBar from "react-bootstrap/ProgressBar";
import iconNext from "../../assets/carbon_next-filled.svg"; 
import ModalBeliSekarang from "../Modals/ModalBeliSekarang";

const MateriOffCanvas = ({ courseDetail, onChapterChange, onVideoChange }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShowBeli, setModalShowBeli] = useState(false);
  const [modalDetail, setModalDetail] = useState(null);

  const handleVideoClick = (chapterIdx, videoIdx) => {
    onChapterChange(chapterIdx);
    onVideoChange(videoIdx);
  }
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
          <div className="header-materi w-100 pt-3">
            <p>Materi Belajar</p>
            <div className="d-flex gap-1">
              <img src={check} className="icon-check"/>
              <ProgressBar
                now={courseDetail?.progress}
                label={
                  <span className="progress-label">{`${courseDetail?.progress}% Complete`}</span>
                }
                className="progress-materi"
              />
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="materi-wrapper">
            {courseDetail && courseDetail?.getChapterResponses?.map((chapter, index) => (
              <div className="chapter" key={index}>
                <div className="header-chapter">
                  <p className="text-chapter">{`Chapter ${index + 1} - ${chapter.judulChapter}`}</p>
                  <p className="text-time">{`${chapter.time} Menit`}</p>
                </div>
                {chapter && chapter.getVideoResponses?.map((video, videoIndex) => (
                  <div className="body-chapter" key={videoIndex}>
                    <div className="materi">
                      <div className="number-materi">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                          <circle cx="18" cy="18" r="17" fill="#EBF3FC" stroke="#EBF3FC" strokeWidth="2"/>
                          <text x="50%" y="50%" textAnchor="middle" dy="0.35em" fontSize="14" fill="#000000">{videoIndex + 1}</text>
                        </svg>
                      </div>
                      <p className="text-title">{video.judulVideo}</p>
                    </div>
                    <div className="button-materi">
                      {video && video.premium ? (
                        <>
                          <button
                            className="bg-transparent border-0"
                            onClick={() => {
                              setModalDetail(courseDetail);
                              setModalShowBeli(true);
                            }}
                          >
                            <img src={filock} className="icon-lock"/>
                          </button>
                          {modalShowBeli && (
                            <ModalBeliSekarang
                            show={modalShowBeli}
                            onHide={() => {
                              setModalDetail(null);
                              setModalShowBeli(false);
                            }}
                            course={modalDetail}
                            />
                          )}
                        </>
                      ) : (
                        <div onClick={() => handleVideoClick(index, videoIndex)}>
                          <PlayCircleFill className="icon-play" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MateriOffCanvas;
