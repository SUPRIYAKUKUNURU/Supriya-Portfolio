import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const socialMediaLinks = [
  // { href: 'https://twitter.com/Sanika_0305', icon: faTwitter },
  { href: 'https://www.linkedin.com/in/supriya-kukunuru-b0b389252/', icon: faLinkedin },
  { href: 'https://github.com/SUPRIYAKUKUNURU', icon: faGithub },
  { href: "https://mail.google.com/mail/u/0/?fs=1&to=supriyakukunuru2001@gmail.com&tf=cm", icon: faEnvelope },
];

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center">
      <div className="max-w-2xl mx-auto text-center bg-opacity-70">
        <p className="font-bold text-grape text-4xl">Hello, I'm</p>
        <h1 className="text-7xl font-extrabold leading-tight my-5 text-black font-dancing-script">Supriya Kukunuru</h1>
        <p className="text-lg text-grape font-medium mb-7">A FRONTEND WEB DEVELOPER</p>
        <div className="flex space-x-4 justify-center">
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
      </div>
    </section>
  );
}

export default Home;
