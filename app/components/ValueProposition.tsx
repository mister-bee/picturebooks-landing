// components/ValueProposition.tsx
import React from "react";
import { FaUserEdit, FaBrain, FaImages, FaMobileAlt } from "react-icons/fa";

export default function ValueProposition() {
  return (
    <section className="text-center py-16">
      <h2 className="text-4xl font-bold mb-6">For the Classroom or Home</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        <div className="benefit-item">
          <FaUserEdit className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Personalized Stories</h3>
          <p>
            Customized content that resonates with each child&apos;s unique
            interests.
          </p>
        </div>
        <div className="benefit-item">
          <FaBrain className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
          <p>
            Adjust text complexity to match the student&apos;s reading level and
            development zone.
          </p>
        </div>
        <div className="benefit-item">
          <FaImages className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Engaging Visuals</h3>
          <p>Stunning illustrations that captivate and maximize engagement.</p>
        </div>
        <div className="benefit-item">
          <FaMobileAlt className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Accessibility</h3>
          <p>Accessible on all devices—read anywhere, anytime.</p>
        </div>
      </div>
    </section>
  );
}
