"use client";

import React from "react";
import { FaShieldAlt, FaLock, FaUserSecret } from "react-icons/fa";

export default function ChildDataPrivacy() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Child Data Privacy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaShieldAlt className="text-4xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              No Personal Data Stored
            </h3>
            <p>
              We do not collect or store any personally identifiable information
              about children.
            </p>
          </div>
          <div className="text-center">
            <FaLock className="text-4xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Encrypted Information
            </h3>
            <p>
              Only anonymous markers and basic encrypted info are used to
              enhance the reading experience.
            </p>
          </div>
          <div className="text-center">
            <FaUserSecret className="text-4xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">COPPA Compliant</h3>
            <p>
              Our practices are fully compliant with the Children&apos;s Online
              Privacy Protection Act (COPPA).
            </p>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-600">
          At PictureBooks.ai, we prioritize the privacy and safety of children.
          Our platform is designed to provide a secure and enriching reading
          experience without compromising personal data.
        </p>
      </div>
    </section>
  );
}
