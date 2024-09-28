"use client";

import React, { useState } from "react";
import Image from "next/image";

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };

  const handleDownloadEbook = () => {
    const ebookUrl = "/ebooks/PictureBooksAi.pdf";
    const link = document.createElement("a");
    link.href = ebookUrl;
    link.download = "PictureBooksAi.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Podcast on Fostering a Love of Reading
        </h2>
        <div className="flex flex-col items-center">
          <div className="w-3/4 mb-8">
            {!isPlaying ? (
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="/images/podcast-title.png"
                  alt="Podcast thumbnail"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            ) : (
              <div className="w-full">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/vNsIgJG5iY0?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleClick}
              className="btn-primary px-4 py-2 rounded text-sm"
            >
              Play Video
            </button>
            <button
              onClick={handleDownloadEbook}
              className="btn-secondary px-4 py-2 rounded text-sm"
            >
              Download eBook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
