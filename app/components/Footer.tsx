// components/Footer.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("Thank you for subscribing!");
        setEmail("");
      } else {
        alert("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <footer id="footer" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">About PictureBooks.ai</h3>
          <p className="mb-4">Let&apos;s ignite a love for reading together!</p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
              <FaFacebook className="text-2xl" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter className="text-2xl" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="text-2xl" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Contact Support
              </a>
            </li>
            <li>
              <a
                href="https://picturebooks.ai/privacy-policy"
                className="hover:text-orange-500"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">
            Subscribe for updates and educational resources.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="p-2 rounded w-full text-black mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn-secondary px-4 py-2 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400">
        &copy; 2024 BeechTree.ai | All rights reserved
      </div>
    </footer>
  );
}
