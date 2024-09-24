// components/ValueProposition.tsx

import { FaUserEdit, FaBrain, FaImages, FaMobileAlt } from "react-icons/fa";

export default function ValueProposition() {
  return (
    <section className="text-center py-16">
      <p className="text-lg mb-12 px-4 md:px-0">
        PictureBooks.ai uses cutting-edge AI technology to create personalized
        picture books tailored to each child's interests and reading level,
        making reading a delightful adventure.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        <div className="benefit-item">
          <FaUserEdit className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Personalized Stories</h3>
          <p>
            Customized content that resonates with each child's unique
            interests.
          </p>
        </div>
        <div className="benefit-item">
          <FaBrain className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
          <p>
            AI adjusts the complexity to match the student's reading progress.
          </p>
        </div>
        <div className="benefit-item">
          <FaImages className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Engaging Visuals</h3>
          <p>
            Stunning illustrations that captivate and enhance comprehension.
          </p>
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
