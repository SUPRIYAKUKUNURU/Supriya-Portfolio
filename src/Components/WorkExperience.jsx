import React from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Tech Source Emerging Info Technologies",
    duration: "Nov 2023 – Present",
    description: [
      "Developed scalable and responsive web applications using React.js, Tailwind CSS, and JavaScript.",
      "Integrated APIs for dynamic data rendering and ensured seamless UI/UX across devices.",
      "Collaborated with backend teams using Java, SQL, and Spring Boot for full-stack functionality.",
      "Implemented reusable components and optimized frontend performance."
    ]
  },
  
];

const WorkExperience = () => {
  return (
    <section id="experience" className="bg-gradient-to-b from-blue-purple to-queen-pink p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center text-cream my-10">WORK EXPERIENCE</h2>
        <div className="flex flex-wrap -mx-2 mb-8">
          {experiences.map(({ role, company, duration, description }, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/2 text-grape mb-10">
              <div className="bg-cream p-6 border border-grape rounded-md mb-4 flex flex-col gap-3 h-full">
                <h3 className="text-[23px] font-archivo font-bold mb-1">{role} | {company}</h3>
                <p className="text-[13px] text-grape mb-2">{duration}</p>
                <ul className="list-disc list-inside text-base font-medium space-y-1">
                  {description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
