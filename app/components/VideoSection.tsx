"use client";

import React, { useState } from "react";
import Image from "next/image";

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Podcast on Fostering a Love of Reading
        </h2>
        <div className="flex flex-col items-center">
          {!isPlaying ? (
            <>
              <div className="relative w-64 h-36 mb-4">
                <Image
                  src="/images/podcast-title.png"
                  alt="Podcast thumbnail"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <button
                onClick={handleClick}
                className="btn-primary px-4 py-2 rounded text-sm"
              >
                Play Video
              </button>
            </>
          ) : (
            <div className="w-full max-w-2xl">
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
      </div>
    </section>
  );
};

export default VideoSection;
