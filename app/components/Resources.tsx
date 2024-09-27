"use client";
import React from "react";
import { useState } from "react";
import PersonalizedLearningModal from "@/app/components/PersonalizedLearningModal";
import AIEducationModal from "@/app/components/AIEducationModal";
import ReadingTipsModal from "@/app/components/ReadingTipsModal";
import { FaBook, FaRobot, FaHome, FaHeart } from "react-icons/fa";

export default function Resources() {
  const [isPersonalizedLearningModalOpen, setIsPersonalizedLearningModalOpen] =
    useState(false);
  const [isAIEducationModalOpen, setIsAIEducationModalOpen] = useState(false);
  const [isReadingTipsModalOpen, setIsReadingTipsModalOpen] = useState(false);

  const handleDownloadEbook = () => {
    // The path is relative to the public directory
    const ebookUrl = "/ebooks/PictureBooksAi.pdf";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = ebookUrl;
    link.download = "PictureBooksAi.pdf";

    // Append to the body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resources" className="bg-gray-50 py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center">Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            title: "The Power of Personalized Reading",
            description:
              "Explore how personalized stories can enhance learning.",
            linkText: "Read More",
            linkStyle: "btn-secondary",
            onClick: () => setIsPersonalizedLearningModalOpen(true),
            icon: <FaBook className="text-4xl mb-4" />,
          },
          {
            title: "How AI is Shaping the Future of Education",
            description: "Discover the impact of AI in modern classrooms.",
            linkText: "Read More",
            linkStyle: "btn-secondary",
            onClick: () => setIsAIEducationModalOpen(true),
            icon: <FaRobot className="text-4xl mb-4" />,
          },
          {
            title: "Tips to Encourage Reading at Home",
            description:
              "Learn effective strategies to foster a reading habit.",
            linkText: "Read More",
            linkStyle: "btn-secondary",
            onClick: () => setIsReadingTipsModalOpen(true),
            icon: <FaHome className="text-4xl mb-4" />,
          },
          {
            title: "10 Ways to Foster a Love for Reading",
            description: "Download our free eBook packed with actionable tips.",
            linkText: "Download eBook",
            linkStyle: "btn-primary",
            onClick: handleDownloadEbook,
            icon: <FaHeart className="text-4xl mb-4" />,
          },
        ].map((item) => (
          <div
            key={item.title}
            className="resource-item bg-white p-6 rounded shadow-md text-center flex flex-col items-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="mb-4">{item.description}</p>
            <button
              onClick={item.onClick}
              className={`${item.linkStyle} px-4 py-2 rounded`}
            >
              {item.linkText}
            </button>
          </div>
        ))}
      </div>
      <PersonalizedLearningModal
        isOpen={isPersonalizedLearningModalOpen}
        onClose={() => setIsPersonalizedLearningModalOpen(false)}
      />
      <AIEducationModal
        isOpen={isAIEducationModalOpen}
        onClose={() => setIsAIEducationModalOpen(false)}
      />
      <ReadingTipsModal
        isOpen={isReadingTipsModalOpen}
        onClose={() => setIsReadingTipsModalOpen(false)}
      />
    </section>
  );
}
