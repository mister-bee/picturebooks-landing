// components/Footer.tsx
"use client";

import React from "react";

import { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">
              About PictureBooks.ai
            </h3>
            <p className="mb-4">
              Let&apos;s ignite a love for reading together!
            </p>
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
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* <li>
                <a href="#" className="hover:text-orange-500">
                  About Us
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-orange-500">
                  Pricing
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-orange-500">
                  FAQs
                </a>
              </li> */}
              <li>
                <a
                  href="https://picturebooks.ai/contact"
                  className="hover:text-orange-500"
                >
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
                <a
                  href="https://picturebooks.ai/terms-of-service"
                  className="hover:text-orange-500"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

            <a
              href="https://picturebooks.ai/contact"
              className="hover:text-orange-500"
            >
              Send a Message
            </a>
            <p>Email: admin@picturebooks.ai</p>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          &copy; 2024 BeechTree.ai | All rights reserved
        </div>
      </div>
    </footer>
  );
}
