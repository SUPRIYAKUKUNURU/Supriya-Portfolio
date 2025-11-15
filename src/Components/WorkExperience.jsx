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
  // Add previous experiences if any
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{exp.role} | {exp.company}</h3>
              <p className="text-gray-500 mb-2">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
