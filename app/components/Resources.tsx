// components/Resources.tsx

export default function Resources() {
  return (
    <section id="resources" className="bg-gray-50 py-16">
      <h2 className="text-3xl font-bold mb-12">Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        {[
          {
            title: "The Power of Personalized Reading",
            description:
              "Explore how personalized stories can enhance learning.",
            linkText: "Read More",
            linkStyle: "btn-secondary",
          },
          {
            title: "How AI is Shaping the Future of Education",
            description: "Discover the impact of AI in modern classrooms.",
            linkText: "Read More",
            linkStyle: "btn-secondary",
          },
          {
            title: "Tips to Encourage Reading at Home",
            description:
              "Learn effective strategies to foster a reading habit.",
            linkText: "Read More",
            linkStyle: "btn-secondary",
          },
          {
            title: "10 Ways to Foster a Love for Reading",
            description: "Download our free eBook packed with actionable tips.",
            linkText: "Download eBook",
            linkStyle: "btn-primary",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="resource-item bg-white p-6 rounded shadow-md"
          >
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="mb-4">{item.description}</p>
            <a href="#" className={`${item.linkStyle} px-4 py-2 rounded`}>
              {item.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
