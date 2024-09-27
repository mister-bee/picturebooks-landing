// components/AdditionalBenefits.tsx

import React from "react";
import { FaChalkboardTeacher, FaHome } from "react-icons/fa";

export default function AdditionalBenefits() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-center items-start md:space-x-16">
        <div className="mb-8 md:mb-0 text-center">
          <FaChalkboardTeacher className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">For Teachers</h3>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Easy integration into lesson plans and curriculum</li>
            <li>Adjust reading levels for intervention</li>
            <li>Build fluency, comprehension, and vocabulary development</li>
          </ul>
        </div>
        <div className="text-center">
          <FaHome className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">For Parents</h3>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Strengthen the parent-child reading bond</li>
            <li>Safe and ad-free environment</li>
            <li>Encourages screen time that educates</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
