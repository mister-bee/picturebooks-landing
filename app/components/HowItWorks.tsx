// components/HowItWorks.tsx

import React from "react";

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
          {[
            {
              step: "1",
              title: "Sign Up for Free",
              description:
                "Create an account in minutes. No credit card required.",
            },
            {
              step: "2",
              title: "Personalize Your Story",
              description: "Give the character, theme, and illustration style.",
            },
            {
              step: "3",
              title: "Let the magic happen",
              description: "Watch as our AI story-crafter creates a wonder!",
            },
            {
              step: "4",
              title: "Send to a reader!",
              description:
                "Print, post a link on Google Classroom, or send a QR code anywhere.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="text-4xl font-bold text-white bg-orange-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://picturebooks.ai"
            className="btn-primary px-6 py-3 rounded inline-block"
          >
            Create Your First Story
          </a>
        </div>
      </div>
    </section>
  );
}
