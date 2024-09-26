"use client";

import React, { useState } from "react";

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="video-section">
      <h2>Watch Our Video</h2>
      {!isPlaying ? (
        <button onClick={handleClick}>Play Video</button>
      ) : (
        <video controls autoPlay playsInline>
          <source src="/videos/podcast1.mp4" type="video/mp4" />
          <source src="/videos/podcast1.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
    </section>
  );
};

export default VideoSection;
