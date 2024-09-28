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
      <h2 className="text-4xl font-bold mb-6 text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        <div className="feature-item text-center">
          <FaChild className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Safe Personalization</h3>
          <p>
            Create personalized characters, settings, and incredible plots with
            100% child-safe content.
          </p>
        </div>
        <div className="feature-item text-center">
          <FaHandPointer className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Collect and Share</h3>
          <p>
            Keep favorites on your bookshelf to share or trade with others,
            fostering a community of young readers.
          </p>
        </div>
        <div className="feature-item text-center">
          <FaLanguage className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
          <p>
            Available in 25+ languages to support diverse learning environments
            for bilingual and multilingual learners.
          </p>
        </div>
        <div className="feature-item text-center">
          <FaChalkboardTeacher className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Educator Resources</h3>
          <p>
            Teachers can be precise with individual reading levels, add target
            vocabulary, and check comprehension with built-in quizzes.
          </p>
        </div>
      </div>
    </section>
  );
}
