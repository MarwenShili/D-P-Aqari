import React, { useState, useRef, useEffect } from "react";
import "./_VideoDemo.scss"; // You can style this component using CSS
import pause from "../../../../assets/icons/pause.svg";
import { useTranslation } from "react-i18next";

const VideoComponent = ({ videoLink, type }) => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const { t } = useTranslation();

  const handleVideoClick = () => {
    const videoElement = videoRef.current;
    if (type === "preview") {
      if (isPaused) {
        videoElement.play().then(() => {
          setIsPaused(false);
        });
      } else {
        videoElement.pause();
        setIsPaused(true);
      }
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (type === "preview") {
      // Set a specific frame as the poster
      videoElement.poster = videoLink + "#t=4"; // Frame at 4 seconds

      videoElement.play().then(() => {
        setIsPaused(false);
      });
    }
  }, [videoLink]);

  return (
    <div
      className={`video-background ${type === "preview" ? "full" : ""}`}
      onClick={() => handleVideoClick()} // Open video on click
    >
      <video
        ref={videoRef}
        src={videoLink}
        preload="metadata"
        loop
        muted
        playsInline
        controls={type === "preview" ? true : false}
      ></video>
      {type !== "preview" && (
        <div className="video-overlay">
          {isPaused ? (
            <>
              <span
                role="img"
                aria-label="Play Icon"
                onClick={() => handleVideoClick()}
              >
                <img src={pause} alt="" />
                {/* ▶️ */}
              </span>
              <p>{t("tour.video_text")}</p>
            </>
          ) : (
            <span
              onClick={() => handleVideoClick()}
              role="img"
              aria-label="Pause Icon"
            >
              {/* ⏸️ */}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
