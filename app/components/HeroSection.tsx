// components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

interface ImageType {
  src: string;
  alt: string;
}

export default function HeroSection() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    fetch("/api/images")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentImage((prevImage) => (prevImage + 1) % images.length),
    onSwipedRight: () =>
      setCurrentImage(
        (prevImage) => (prevImage - 1 + images.length) % images.length
      ),
  });

  return (
    <header className="flex flex-col-reverse md:flex-row items-center px-8 py-16 bg-gray-50">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Ignite a Love for Reading with AI-Powered Picture Books
        </h1>
        <p className="text-lg mb-6 text-gray-600">
          Personalized stories that captivate young minds and foster a lifelong
          passion for reading.
        </p>
        <Link
          href="https://picturebooks.ai"
          className="btn-primary px-6 py-3 rounded"
        >
          Start Your Free Trial
        </Link>
      </div>
      <div
        className="md:w-1/2 mb-8 md:mb-0 flex justify-center relative h-64 md:h-96"
        {...handlers}
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </header>
  );
}
