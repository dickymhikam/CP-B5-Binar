import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import play from "../../assets/playvideo.svg";
import { videoTrigger } from "../../services/api";

const DetailVideo = ({ videos, chapter, videoindex }) => {
    const [isButton, setIsButton] = useState(false);
    const [indexVideo, setIndexVideo] = useState(videoindex);
    const [indexChapter, setIndexChapter] = useState(chapter);
    const selectedVideo = videos && videos[indexChapter]?.getVideoResponses?.[indexVideo];

    const totalVideos = videos && videos[indexChapter]?.getVideoResponses?.length;
    const totalChapters = videos && videos.length;

    const handleBtnTrue = () => {
        setIsButton(true);
    };

    const handleBtnFalse = () => {
        setIsButton(false);
    };

    const handlePrevVideo = () => {
        if (indexVideo > 0) {
            setIndexVideo(indexVideo - 1);
        } else if ((indexVideo === 0) && (indexChapter > 0)) {
            setIndexChapter(indexChapter - 1);
            setIndexVideo(totalVideos - 1);
        }
        handleBtnFalse();
    };
    
    const handleNextVideo = () => {
        if (indexVideo < totalVideos - 1) {
            setIndexVideo(indexVideo + 1);
        } else if ((indexVideo === totalVideos - 1) && (indexChapter < totalChapters - 1)) {
            setIndexChapter(indexChapter + 1);
            setIndexVideo(0);
        }
        handleBtnFalse();
    };

    useEffect(() => {
        setIndexVideo(videoindex);
        setIndexChapter(chapter);
    }, [chapter, videoindex]);

    const handleTrigger = () => {
        handleBtnTrue();
        videoTrigger(selectedVideo.videoCode);
    }

    return (
    <>
        <div className="detail-video">
            <div className="detail-video-player">
                {selectedVideo && (
                    <>
                    {selectedVideo.linkVideo ? (
                        <YouTube
                        videoId={selectedVideo.linkVideo && selectedVideo.linkVideo.split("/").slice(-1)[0]}
                        opts={{ width: "100%", height: "360px" }}
                        onEnd={handleTrigger}
                        onPlay={handleBtnFalse}
                        />
                    ) : (
                        <div className="video-play-btn">
                            <img src={play} alt="Play" />
                        </div>
                    )
                    }
                    </>
                )}
            </div>
            {isButton && (
            <div className="detail-video-buttons">
                <button className="video-prev" onClick={handlePrevVideo}>
                    Prev
                </button>
                <button className="video-next" onClick={handleNextVideo}>
                    Next
                </button>
            </div>
            )}
        </div>
    </>
  );
};

export default DetailVideo;