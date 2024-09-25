// components/Features.tsx
import React from "react";

import {
  FaChild,
  FaHandPointer,
  FaLanguage,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        <div className="feature-item">
          <FaChild className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Customizable Characters
          </h3>
          <p>
            Children can see themselves in the stories by customizing
            characters&apos; appearances.
          </p>
        </div>
        <div className="feature-item">
          <FaHandPointer className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Collect and Share</h3>
          <p>
            Children can collect their favorite stories and characters to share
            or trade with others, fostering a community of young readers.
          </p>
        </div>
        <div className="feature-item">
          <FaLanguage className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
          <p>
            Available in multiple languages to support diverse learning
            environments.
          </p>
        </div>
        <div className="feature-item">
          <FaChalkboardTeacher className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Educator Resources</h3>
          <p>
            Tools for matching reading levels, tracking comprehension, and
            supporting vocabulary development to enhance the learning
            experience.
          </p>
        </div>
      </div>
    </section>
  );
}
