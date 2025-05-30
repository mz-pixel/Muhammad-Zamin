import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import projects from "./projects";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setWorks(projects);
    setFilterWork(projects);
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span style={{ color: "black" }}>Work</span>
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.1 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.img} alt={work.title} id={work.title} />
            </div>

            <div className="app__work-content app__flex">
              <a
                href={work.codeLink}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <h4 className="bold-text">{work.title}</h4>
              </a>
              <a
                href={work.codeLink}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text row">
                    <b>MADE WITH: </b>
                    {work.tags.map((tag, index) => (
                      <p className="p-text app__work-smallpill center">{tag}</p>
                    ))}
                  </p>
                </div>
              </a>

              <div className="app__work-links app__flex">
                {work.codeLink && (
                  <a className="github app__flex" href={work.codeLink}>
                    <AiFillGithub />
                    Github
                  </a>
                )}
                {work.projectLink && (
                  <a className="website app__flex" href={work.projectLink}>
                    <AiFillEye />
                    Webiste
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
