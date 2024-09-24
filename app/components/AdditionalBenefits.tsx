// components/AdditionalBenefits.tsx

export default function AdditionalBenefits() {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row justify-center items-start md:space-x-16">
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">For Teachers</h3>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Curriculum-aligned content</li>
            <li>Easy integration into lesson plans</li>
            <li>Collaborative classroom features</li>
          </ul>
        </div>
        <div>
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
