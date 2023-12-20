import { useState } from "react";
import YouTube from "react-youtube";
import play from "../../assets/playvideo.svg";

const DetailVideo = ({ videos, chapter, videoindex }) => {
    const selectedVideo = videos && videos[chapter]?.getVideoResponses?.[videoindex];
    const [isButton, setIsButton] = useState(false);

    const handleBtnTrue = () => {
        setIsButton(true);
    }
    const handleBtnFalse = () => {
        setIsButton(false);
    }

    const handlePrevVideo = () => {
        /* handle Prev */
    }
    const handleNextVideo = () => {
        /* handle Next */
    }

    return (
    <>
        <div className="detail-video">
            <div className="detail-video-player">
                {selectedVideo ? (
                    <YouTube
                        videoId={selectedVideo.linkVideo.split("/").slice(-1)[0]}
                        opts={{ width: "100%", height: "360px" }}
                        onEnd={handleBtnTrue}
                        onPlay={handleBtnFalse}
                    />
                ) : (
                    <div className="video-play-btn">
                        <img src={play} />
                    </div>
                )}
            </div>
            {isButton && (
                <div className="detail-video-buttons">
                    <button className="video-prev" onClick={handlePrevVideo}>Prev</button>
                    <button className="video-next" onClick={handleNextVideo}>Next</button>
                </div>
            )}
        </div>
    </>
    )
}

export default DetailVideo;