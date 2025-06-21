// src/components/SocialMedia.jsx
import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'; // İconlar için react-icons kullandık
import './SocialMedia.css'; // Stil dosyasını import ettik

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.linkedin.com/in/omercetinadam/" target="_blank" rel="noopener noreferrer" className="social-media__link">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/omeradm27" target="_blank" rel="noopener noreferrer" className="social-media__link">
        <FaGithub />
      </a>
    </div>
  );
}

export default SocialMedia;
