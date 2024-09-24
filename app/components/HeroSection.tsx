// components/HeroSection.tsx

import Link from "next/link";

export default function HeroSection() {
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
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <img
          src="/images/bookdream.png"
          alt="Children reading a magical book"
          className="w-3/4"
        />
      </div>
    </header>
  );
}
