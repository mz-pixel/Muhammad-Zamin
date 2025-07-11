import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import projects from "./projects";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [tag, setTag] = useState("WebApp");

  useEffect(() => {
    setWorks(projects);
    setFilterWork(projects.filter((work) => work.format.includes("WebApp")));
  }, []);
  const handleWorkFilter = (item) => {
    setTag(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.format.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My <span style={{ color: "black" }}>Work</span>
      </h2>

      <div className="app__work-filter">
        {/* {["WebApp", "Hardware", "Computer Security", "Machine Learning", "Other"].map( */}
        {["WebApp", "Machine Learning", "Other"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              tag === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

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
                    <span class="link-text">Github</span>
                  </a>
                )}
                {work.projectLink && (
                  <a className="website app__flex" href={work.projectLink}>
                    <AiFillEye />
                    <span class="link-text">Website</span>
                  </a>
                )}
                {work.youtubeLink && (
                  <a className="youtube app__flex" href={work.youtubeLink}>
                    <AiFillYoutube />
                    <span class="link-text">Youtube</span>
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
