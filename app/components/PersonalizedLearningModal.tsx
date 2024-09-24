import ReactMarkdown from "react-markdown";

const markdownContent = `
# The Power of Personalized Reading

**Explore how personalized stories can enhance learning**

In a world overflowing with information, the ability to read effectively is more crucial than ever. Yet, not all reading experiences are created equal. Imagine a story crafted just for you or your child—tailored to interests, reading level, and learning goals. Welcome to the transformative world of personalized reading.

## Unlocking Engagement Through Personalization

At its core, personalized reading is about making the reader the hero of their own literary journey. When stories align with a reader's interests and needs, engagement skyrockets. This heightened engagement isn't just about keeping eyes on the page; it's a catalyst for deeper comprehension and retention.

Consider a child fascinated by space exploration. A story about cosmic adventures, filled with familiar names and personalized scenarios, will naturally draw them in more than a generic tale. This emotional connection to the content makes the learning experience not only enjoyable but also more effective.

## Enhancing Learning One Story at a Time

Personalized stories do more than entertain—they educate. Here's how:

### **Improved Comprehension**

When readers are interested, they pay closer attention. Personalized content reduces cognitive load because the context is familiar or exciting to them. This allows readers to focus on understanding and interpreting the material, leading to better comprehension.

### **Vocabulary Expansion**

Tailored stories can introduce new vocabulary in contextually relevant ways. By embedding new words within a familiar or exciting narrative, readers are more likely to grasp and remember them. This contextual learning accelerates vocabulary acquisition and enriches language skills.

### **Boosted Motivation**

Personalization can turn reading from a chore into a cherished activity. When readers see themselves reflected in stories, it validates their experiences and identities, fostering a love for reading that can last a lifetime.

## The Technology Making It Possible

Advancements in artificial intelligence have opened up new horizons for personalized learning. AI algorithms can now analyze a reader's preferences, reading level, and learning objectives to generate customized content in real-time.

### **Enter Picturebooks.ai**

This is where [Picturebooks.ai](https://picturebooks.ai) comes into play. Leveraging cutting-edge AI technology, Picturebooks.ai creates short, personalized picture books that cater to individual readers. Each story is a unique blend of engaging narratives, tailored vocabulary, and comprehension exercises designed to enhance learning outcomes.

## Why Choose Picturebooks.ai?

- **Tailored Content:** Stories are customized based on the reader's interests and reading level.
- **Interactive Learning:** Comprehension questions and vocabulary exercises are integrated into each story.
- **Visual Engagement:** High-quality illustrations make the reading experience more immersive.
- **Convenient Access:** Read anywhere, anytime on your preferred device.

## Success Stories

Parents and educators are witnessing remarkable transformations. Children who were once reluctant readers are now eagerly awaiting their next personalized story. Educators report that students show improved comprehension and a richer vocabulary after consistently engaging with personalized picture books.

*"My daughter used to struggle with reading, but ever since we started using Picturebooks.ai, she's not only improved but also developed a genuine love for books."* — *Sarah L., Parent*

## Take the Next Step Towards Enhanced Learning

The journey to better reading and learning experiences starts with a single page. Unlock the potential of personalized stories with Picturebooks.ai and witness the difference it can make.

### **Exclusive Offer**

Subscribe today and get a **7-day free trial**. Experience firsthand how personalized picture books can transform reading time into an exciting adventure of learning and growth.

[Start Your Free Trial Now](https://picturebooks.ai/subscribe)

---

Personalized reading isn't just a trend; it's a powerful tool that can reshape the way we learn and interact with the world. Embrace the future of reading with Picturebooks.ai and turn every story into a personalized journey of discovery.
`;

export default function PersonalizedLearningModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-3xl max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="float-right text-2xl font-bold">
          &times;
        </button>
        <ReactMarkdown
          components={{
            h1: ({ ...props }) => (
              <h1 className="text-4xl font-bold mb-6" {...props} />
            ),
            h2: ({ ...props }) => (
              <h2 className="text-3xl font-semibold mt-8 mb-4" {...props} />
            ),
            h3: ({ ...props }) => (
              <h3 className="text-2xl font-semibold mt-6 mb-3" {...props} />
            ),
            p: ({ ...props }) => <p className="mb-4" {...props} />,
            ul: ({ ...props }) => (
              <ul className="list-disc list-inside mb-4" {...props} />
            ),
            ol: ({ ...props }) => (
              <ol className="list-decimal list-inside mb-4" {...props} />
            ),
            li: ({ ...props }) => <li className="mb-2" {...props} />,
            a: ({ ...props }) => (
              <a
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              />
            ),
            strong: ({ ...props }) => (
              <strong className="font-bold" {...props} />
            ),
            em: ({ ...props }) => <em className="italic" {...props} />,
            blockquote: ({ ...props }) => (
              <blockquote
                className="border-l-4 border-gray-300 pl-4 italic my-4"
                {...props}
              />
            ),
            hr: ({ ...props }) => <hr className="my-8" {...props} />,
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}
