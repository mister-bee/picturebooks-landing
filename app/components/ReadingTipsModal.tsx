import ReactMarkdown from "react-markdown";

const markdownContent = `
# Tips to Encourage Reading at Home

**Learn effective strategies to foster a reading habit**

Instilling a love for reading in children is one of the most rewarding gifts a parent can offer. Reading expands horizons, enhances vocabulary, and ignites imagination. However, in an era dominated by digital distractions, encouraging children to pick up a book can be challenging. Here are some effective strategies to foster a reading habit at home.

## 1. Create a Reading-Friendly Environment

Designate a cozy corner in your home as a reading nook. Fill it with comfortable seating, good lighting, and a variety of books appropriate for your child's age and interests. An inviting space can make reading feel like a special activity rather than a chore.

## 2. Lead by Example

Children often emulate the adults around them. Let your child see you reading regularly—be it books, magazines, or newspapers. Discuss what you're reading and why you enjoy it. Your enthusiasm can be contagious!

## 3. Incorporate Reading into Daily Routines

Set aside a specific time each day dedicated to reading. Whether it's before bedtime or after dinner, consistency helps make reading a habit. Even 15-20 minutes a day can make a significant difference.

## 4. Choose Books That Interest Them

Allow your child to pick books that align with their interests, whether it's adventure stories, mysteries, or books about animals. When children are interested in the subject matter, they're more likely to engage with the text.

## 5. Use Technology to Your Advantage

Incorporate e-books and reading apps to make reading more interactive and engaging. Many digital platforms offer features like read-aloud options, animations, and interactive elements that can captivate young readers.

### **Introducing Picturebooks.ai**

Speaking of technology, [Picturebooks.ai](https://picturebooks.ai) is an innovative platform that leverages AI to create personalized picture books tailored to your child's interests and reading level. Each story includes comprehension support and vocabulary enhancements, making reading both fun and educational.

#### **Why Picturebooks.ai is a Game-Changer**

- **Personalized Stories:** AI-generated books that resonate with your child's unique interests.
- **Comprehension Support:** Integrated questions and prompts to deepen understanding.
- **Vocabulary Building:** Introduces new words in context, enhancing language skills.
- **Accessible Anywhere:** Enjoy reading on any device, at any time.

## 6. Engage in Reading Activities Together

Make reading a shared experience. Take turns reading aloud, discuss the plot, and predict what might happen next. This not only improves comprehension but also strengthens your bond.

## 7. Visit Libraries and Bookstores

Regular trips to the library or bookstore can excite children about reading. Let them explore different genres and pick out books that catch their eye. Many libraries also offer reading programs and events for kids.

## 8. Set Up a Reward System

Implement a simple reward system to motivate your child. For example, after finishing a certain number of books, they could choose a new book or enjoy a special outing. Positive reinforcement can encourage consistent reading.

## 9. Incorporate Reading into Daily Life

Encourage your child to read signs, menus, recipes, and instructions in everyday situations. This practice reinforces the idea that reading is a valuable and practical skill.

## 10. Encourage Writing

Reading and writing go hand in hand. Encourage your child to keep a journal, write stories, or create comics. This not only enhances their writing skills but also deepens their appreciation for storytelling.

## Make Reading Fun and Enjoyable

The key to encouraging reading at home is to make it an enjoyable and pressure-free activity. Celebrate their progress, show interest in what they're reading, and provide ample opportunities for them to explore different types of literature.

### **Special Offer from Picturebooks.ai**

To support your efforts in fostering a reading habit, Picturebooks.ai is offering a **7-day free trial**. Experience how personalized, engaging stories can captivate your child and make reading a cherished part of their day.

[**Start Your Free Trial Today**](https://picturebooks.ai/subscribe)

---

By combining these strategies with the innovative resources available through Picturebooks.ai, you can create a dynamic and supportive reading environment at home. Empower your child with the gift of reading and watch as they embark on countless adventures through the pages of a book.
`;

export default function ReadingTipsModal({ isOpen, onClose }) {
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
