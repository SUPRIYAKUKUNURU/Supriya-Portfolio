import React from 'react';

const Projects = () => {
  const projects = [
    {
  title: 'MySQL Coding Assignment',
  skills: 'MySQL | SQL Queries | DDL | DML | Aggregate Functions',
  about: 'This project demonstrates my ability to use MySQL for database creation, data manipulation, and querying. I created an `employees` table with columns like id, name, department, salary, hire_date, email, and status. The project includes DDL operations such as table creation and DML operations including inserting 10 sample records. Various SELECT queries were implemented to filter, group, and aggregate data—such as retrieving employees by salary range, hire dates, status conditions, and department-wise summaries.',
  learning: 'Through this assignment, I deepened my understanding of SQL fundamentals, especially in working with DDL and DML commands. I practiced writing queries to filter records using WHERE, BETWEEN, IN, IS NULL, ORDER BY, and GROUP BY clauses. I also learned to apply aggregate functions like COUNT(), AVG(), and MAX() for data summarization, which helped enhance my data handling and reporting skills in MySQL.',
  visitLink: 'https://drive.google.com/file/d/1LEDN5u2bjhVnIHGnT5L3EUijSn15d1xr/view?usp=sharing'
},

{
  title: 'Library Management System',
  skills: 'Java | OOPs | Collection Framework',
  about: 'A console-based application developed using Java that allows users to manage a library efficiently. The system supports core functionalities like adding new books, removing existing books, searching by title or author, displaying the full catalog, and issuing/returning books. It follows Object-Oriented Programming (OOP) principles and uses the Java Collection Framework—primarily ArrayList and HashMap—for efficient data storage and retrieval. The application includes validation checks, menu-driven navigation, and modular code structure to ensure maintainability and scalability.',
  learning: 'This project helped me strengthen my understanding of core Java, especially object-oriented principles like inheritance, encapsulation, and abstraction. I gained practical experience working with the Collection Framework to manage complex data sets. Additionally, I learned how to write reusable, modular code and apply real-world logic to build a fully functional system from scratch.',
  visitLink: 'https://drive.google.com/file/d/1dE5xCPPzxrKpv5WV3V7mMOVTh5hjb-MD/view?usp=sharing'
},

    {
      title: 'E-Commerce',
      skills: 'HTML | CSS | Javascript | Bootstrap',
      about: 'The e-commerce website for clothing, electronics, and jewelry is built with HTML, CSS, Bootstrap, and JavaScript. It offers a responsive design, mobile-friendly layout, and interactive features like product filtering and dynamic cart updates for a smooth shopping experience..',
      learning: 'This project enhanced my skills in creating responsive layouts with HTML, CSS, and Bootstrap, and implementing interactive features like product filtering and dynamic carts using JavaScript..',
      visitLink: 'frabjous-dusk-9bfafb.netlify.app',
      sourceLink: 'https://github.com/SUPRIYAKUKUNURU/E-Commerce-',
    },
    {
      title: 'Heatmap',
      skills: 'HTML | CSS | Plotly.js | Plain JavaScript',
      about: 'The heatmap project, built with JavaScript, HTML, CSS, and Plotly.js, visualizes game ratings using a color scale, where each cell represents a game and its rating. It offers interactive, data-driven insights into game features..',
      learning: 'This project enhances the ability to create interactive visualizations with Plotly.js and integrates JavaScript, HTML, and CSS for responsive interfaces. It also improves the use of color scales to present complex data clearly..',
      visitLink: 'https://clever-cajeta-f8c800.netlify.app',
      sourceLink: 'https://github.com/SUPRIYAKUKUNURU/Heatmap',
    },
    {
      title: 'Shopping-Cart ',
      skills: 'HTML |CSS | JavaScript | ReactJs| Tailwind CSS | ',
      about: 'The shopping cart project, built with React and TailwindCSS, allows users to add, remove, and clear items with real-time updates. React manages the carts state, while TailwindCSS provides a responsive, modern design..',
      learning: 'Include managing state with React for dynamic cart updates, using TailwindCSS for responsive design, and handling user interactions effectively within a web app..',
      visitLink: 'https://unique-queijadas-dc3d25.netlify.app',
      sourceLink: 'https://github.com/SUPRIYAKUKUNURU/Shopping-cart',
    },
    {
      title: 'Trend Vault',
      skills: 'ReactJs| Material UI | ',
      about: 'The Trend Vault project, built with React.js, features key pages like Home, Shop, About, Contact, Journal, Product Details, Cart, and Footer. It includes form validations for secure user input and offers a seamless, responsive shopping experience.',
      learning: 'Learned to build multi-page applications using React, implement form validations, manage component-based architecture, and design responsive UIs for better user experience.',
      visitLink: 'https://trend-vault-two.vercel.app/',
      sourceLink: 'https://github.com/SUPRIYAKUKUNURU/TrendVault',
    },
    {
      title: 'Mart',
      skills: 'ReactJs| Material UI |Bootstrap ',
      about: 'The Mart project is a responsive e-commerce site built with React.js, Material UI, and Bootstrap. It features categories like Sofas, Phones, Furniture, and Chairs, with key pages including Home, Shop, Product Details, Cart, and Contact. The UI is clean and user-friendly with form validations and smooth navigation.',
      learning: 'Learned to create responsive UIs using Material UI and Bootstrap, manage component-based architecture in React, and implement form validations for better user experience.',
      visitLink: 'https://mart-supriyakukunurus-projects.vercel.app/ ',
      sourceLink: 'https://github.com/SUPRIYAKUKUNURU/Mart',
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-blue-purple to-queen-pink p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center text-cream my-10">PROJECTS</h2>
        <div className="flex flex-wrap -mx-2 mb-8">
          {projects.map(({ title, skills, about, learning, visitLink, sourceLink }, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/2 text-grape mb-10">
              <div className="bg-cream p-6 border border-grape rounded-md mb-4 flex flex-col gap-3 h-full">
                <h3 className="text-[23px] font-archivo font-bold mb-2">{title}</h3>
                <p className="text-[13px] text-grape mb-2">{skills}</p>
                <div className="flex flex-col justify-between">
                  <p className="text-base mb-4 font-medium">{about}</p>
                  <p className="text-base mb-4 font-medium"><span className='font-bold'>Learnings</span>: {learning}</p>
                </div>
                <div className="flex gap-4 text-grape">
                  <a href={visitLink} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:opacity-60">Visit</a>
                  <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:opacity-60">View Source</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
