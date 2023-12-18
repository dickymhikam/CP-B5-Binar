import { PlayCircleFill } from "react-bootstrap-icons";
import ProgressBar from "react-bootstrap/ProgressBar";

import filock from "../../assets/fi_lock.svg";
import ficheck from "../../assets/fi_check.svg";

const DetailMateri = ({ courseDetail }) => {
  return (
    <>
      <div className="container">
        <div className="header-materi">
          <p>Materi Belajar</p>
          <div className="d-flex">
            <img src={ficheck} alt="icon-check" className="icon-check" />
            <ProgressBar
              now={courseDetail?.progress}
              label={`${courseDetail?.progress}% Complete`}
              className="progress-materi"
            />
          </div>
        </div>

        {courseDetail && courseDetail?.getChapterResponses?.map((chapter, index) => (
          <div className="chapter" key={index}>
            <div className="header-chapter">
              <p className="text-chapter">{`Chapter ${chapter.noChapter} - ${chapter.judulChapter}`}</p>
              <p className="text-time">{`${chapter.time} Menit`}</p>
            </div>
            <div className="body-chapter">
              {chapter && chapter.getVideoResponses?.map((video, videoIndex) => (
                <div className="materi" key={videoIndex}>
                  <div className="number-materi rounded-circle">
                    <p className="mt-3">{videoIndex + 1}</p>
                  </div>
                  <div className="text-materi  mx-auto border-bottom py-2 ">
                    <p className="text-title mb-0">{video.judulVideo}</p>
                    {video && video.premium ? (
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
    </>
  );
};

export default DetailMateri;