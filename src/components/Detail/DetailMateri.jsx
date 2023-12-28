import { useState } from "react";
import { PlayCircleFill } from "react-bootstrap-icons";
import ProgressBar from "react-bootstrap/ProgressBar";

import filock from "../../assets/fi_lock.svg";
import ficheck from "../../assets/fi_check.svg";
import ModalBeliSekarang from "../Modals/ModalBeliSekarang";

const DetailMateri = ({ courseDetail, onChapterChange, onVideoChange }) => {
  const [modalShowBeli, setModalShowBeli] = useState(false);
  const [modalDetail, setModalDetail] = useState(null);

  const handleVideoClick = (chapterIdx, videoIdx) => {
    onChapterChange(chapterIdx);
    onVideoChange(videoIdx);
  }

  return (
    <>
      <div className="container">
        <div className="header-materi">
          <p>Materi Belajar</p>
          <div className="d-flex justify-content-between gap-1">
            <img src={ficheck} className="icon-check" />
            <ProgressBar
              now={courseDetail?.progress}
              label={
                <span className="progress-label">{`${courseDetail?.progress}% Complete`}</span>
              }
              className="progress-materi"
            />
          </div>
        </div>

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
                  {video && video.linkVideo ? (
                    <div onClick={() => handleVideoClick(index, videoIndex)}>
                      <PlayCircleFill className="icon-play" />
                    </div>
                  ) : (
                    <>
                      <button
                        className="border-0 bg-transparent"
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
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailMateri;