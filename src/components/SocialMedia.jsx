import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/mz-pixel">
      <div>
        <BsGithub />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/muhammad-zamin-4b4998209/">
      <div>
        <BsLinkedin />
      </div>
    </a>
  </div>
);

export default SocialMedia;
