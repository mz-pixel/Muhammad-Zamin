import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import projects from "./projects";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [tag, setTag] = useState("WebApp");

  useEffect(() => {
    setWorks(projects);
    setFilterWork(projects.filter((work) => work.format.includes("WebApp")));
  }, []);

  const handleWorkFilter = (item) => {
    setTag(item);
    if (item === "All") {
      setFilterWork(works);
    } else {
      setFilterWork(works.filter((work) => work.format.includes(item)));
    }
  };

  return (
    <div className="work-section">
      <div className="work-section__header">
        <h2 className="section-heading" id="work-heading">
          My <span className="accent">Work</span>
        </h2>
        <p className="section-subtitle">
          A selection of projects I've built and contributed to.
        </p>
      </div>

      {/* Filter pills */}
      <div className="work-section__filters">
        {["WebApp", "Machine Learning"].map((item) => (
          <button
            key={item}
            onClick={() => handleWorkFilter(item)}
            className={`work-filter-pill ${
              tag === item ? "work-filter-pill--active" : ""
            }`}
            id={`work-filter-${item.toLowerCase()}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tag}
          className="work-section__grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {filterWork.map((work, index) => (
            <motion.div
              className="project-card glass-card"
              key={work.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              id={`project-${work.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {/* Image */}
              <div className="project-card__image-wrapper">
                <img
                  src={work.img}
                  alt={work.title}
                  className="project-card__image"
                />
                <div className="project-card__image-overlay">
                  {work.projectLink && (
                    <a
                      href={work.projectLink}
                      className="project-card__overlay-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillEye />
                    </a>
                  )}
                  {work.codeLink && (
                    <a
                      href={work.codeLink}
                      className="project-card__overlay-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="project-card__content">
                <h3 className="project-card__title">{work.title}</h3>
                <p className="project-card__desc">{work.description}</p>

                {/* Tech tags */}
                <div className="project-card__tags">
                  {work.tags.map((t, i) => (
                    <span className="glow-pill" key={i}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-card__links">
                  {work.codeLink && (
                    <a
                      href={work.codeLink}
                      className="project-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                      <span>Code</span>
                    </a>
                  )}
                  {work.projectLink && (
                    <a
                      href={work.projectLink}
                      className="project-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillEye />
                      <span>Live</span>
                    </a>
                  )}
                  {work.youtubeLink && (
                    <a
                      href={work.youtubeLink}
                      className="project-card__link project-card__link--youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillYoutube />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AppWrap(MotionWrap(Work, "work-section__wrapper"), "work");
