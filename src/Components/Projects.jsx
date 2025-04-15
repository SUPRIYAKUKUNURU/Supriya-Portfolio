import React from 'react';

const Projects = () => {
  const projects = [
   
    {
      title: 'E-Commerce',
      skills: 'HTML | CSS | Javascript | Bootstrap',
      about: 'The e-commerce website for clothing, electronics, and jewelry is built with HTML, CSS, Bootstrap, and JavaScript. It offers a responsive design, mobile-friendly layout, and interactive features like product filtering and dynamic cart updates for a smooth shopping experience..',
      learning: 'This project enhanced my skills in creating responsive layouts with HTML, CSS, and Bootstrap, and implementing interactive features like product filtering and dynamic carts using JavaScript..',
      visitLink: 'https://whimsical-halva-c5ca7d.netlify.app',
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
