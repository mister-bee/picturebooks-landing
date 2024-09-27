// components/HeroSection.tsx
"use client";

import React, { useState, useEffect, useMemo } from "react";

import Image from "next/image";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";

interface ImageType {
  src: string;
  alt: string;
}

export default function HeroSection() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Shuffle images when they are loaded
  const shuffledImages = useMemo(() => {
    return [...images].sort(() => Math.random() - 0.5);
  }, [images]);

  useEffect(() => {
    fetch("/api/images")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  useEffect(() => {
    if (shuffledImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % shuffledImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [shuffledImages]);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % shuffledImages.length
      ),
    onSwipedRight: () =>
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + shuffledImages.length) % shuffledImages.length
      ),
  });

  return (
    <header className="flex flex-col-reverse md:flex-row items-center px-4 md:px-8 py-4 md:py-16 bg-gray-50">
      <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0 md:pr-8">
        <h1
          className="mb-4 text-center md:text-left mt-2 md:mt-0"
          style={{
            color: "black",
            fontSize: "clamp(2.5em, 7vw, 5em)",
            fontFamily: "'Paytone One', sans-serif",
            lineHeight: "1.2",
            paddingBottom: "-1em",
          }}
        >
          Picture Books
        </h1>
        <p className="text-base md:text-lg mb-6 text-gray-600">
          Ignite a love of reading with personalized stories that captivate
          young minds and foster a lifelong passion for learning.
        </p>
        <div className="flex justify-center md:justify-start">
          <Link
            href="https://picturebooks.ai"
            className="btn-primary px-6 py-3 rounded text-base"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
      <div
        className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center hero-image-container"
        {...handlers}
      >
        {shuffledImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 125vw, 50vw"
              className="hero-image"
              style={{ objectFit: "contain", objectPosition: "center" }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </header>
  );
}
