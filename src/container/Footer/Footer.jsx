import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import { HiMail } from "react-icons/hi";
import { HiDocument } from "react-icons/hi";

const Footer = () => {
  const [email, setEmail] = useState("zamin@my.yorku.ca");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("zamin@my.yorku.ca");
      setEmail("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };
  return (
    <>
      <h2 className="head-text">
        If you find my work impressive, I'd love to discuss further. Let's
        connect!
      </h2>

      <div className="app__footer-cards">
        <a onClick={copyToClipboard}>
          <div className="app__footer-card ">
            <HiMail />
            <div className="p-text email-card">
              <p id="email">{email}</p>
              <p className="email-instructions">Click to copy</p>
            </div>
          </div>
        </a>
        <a
          href="/Muhammad Zamin resume.pdf"
          className="app__footer-mobile-resume"
          style={{ textDecoration: "none" }}
        >
          <div className="app__footer-card app__footer-resume" id="resumeDiv">
            <HiDocument />
            <div className="p-text">
              <p>Resume</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
