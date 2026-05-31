import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = ({ size = "md" }) => {
  const iconSize = size === "lg" ? "1.3rem" : "1rem";

  return (
    <div className="social-links">
      <a
        href="https://github.com/mz-pixel"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="GitHub"
      >
        <BsGithub style={{ width: iconSize, height: iconSize }} />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-zamin-4b4998209/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="LinkedIn"
      >
        <BsLinkedin style={{ width: iconSize, height: iconSize }} />
      </a>
    </div>
  );
};

export default SocialMedia;
