import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialMediaLinks = [
  {
    href: "https://www.linkedin.com/in/supriya-kukunuru-b0b389252/",
    icon: faLinkedin,
  },
  { href: "https://github.com/SUPRIYAKUKUNURU", icon: faGithub },
  {
    href: "https://mail.google.com/mail/u/0/?fs=1&to=supriyakukunuru2001@gmail.com&tf=cm",
    icon: faEnvelope,
  },
];

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center"
    >
      <div className="max-w-2xl mx-auto text-center bg-opacity-70">
        <p className="font-bold text-grape text-4xl">Hello, I'm</p>
        <h1 className="text-7xl font-extrabold leading-tight my-5 text-black font-dancing-script">
          Supriya Kukunuru
        </h1>
        <p className="text-lg text-grape font-medium mb-7">
          A FRONTEND WEB DEVELOPER
        </p>

        
        <div className="flex space-x-4 justify-center mb-6">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-grape hover:text-black"
            >
              <FontAwesomeIcon icon={link.icon} size="lg" />
            </a>
          ))}
        </div>

        
        <div className="text-center">
          <a
            href="https://drive.google.com/file/d/1WgO-2MmadC2QYVkFB33CdAMGdEoO3u6y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold bg-cream text-grape p-3 border border-solid border-grape rounded-lg hover:bg-grape hover:text-cream transition duration-300"
          >
            Check my resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
