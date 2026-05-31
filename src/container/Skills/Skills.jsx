import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import experiencess from "./experiencess";
import skillss from "./skillss.js";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Expertise");
  const [filterExperience, setFilterExperience] = useState([]);

  useEffect(() => {
    setExperiences(experiencess);
    setFilterExperience(
      experiencess.filter((experience) => experience.tags.includes("Expertise"))
    );
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setFilterExperience(
      experiences.filter((experience) => experience.tags.includes(item))
    );
  };

  return (
    <div className="skills-section">
      {/* Section Header */}
      <div className="skills-section__header">
        <h2 className="section-heading" id="skills-heading">
          Skills & <span className="accent">Experience</span>
        </h2>
        <p className="section-subtitle">
          I am a fourth year student at York University, pursuing Specialized
          Honours BSc in Computer Science. I am a self-taught web developer and
          have been working with React for over two years now. I am also
          familiar with other web technologies such as Node.js, Express.js, and
          MongoDB. I am currently looking for a Software Engineering internship
          to gain work experience in the field.
        </p>
      </div>

      <div className="skills-section__body">
        {/* Skills Grid */}
        <div className="skills-grid">
          {skillss.map((skill, index) => (
            <motion.div
              className="skill-tile glass-card"
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.04 }}
              id={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <div className="skill-tile__icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <span className="skill-tile__name">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Experience Panel */}
        <div className="experience-panel">
          {/* Filter Tabs */}
          <div className="experience-tabs">
            {["Expertise", "Work", "Education"].map((item) => (
              <button
                key={item}
                onClick={() => handleWorkFilter(item)}
                className={`experience-tab ${
                  activeFilter === item ? "experience-tab--active" : ""
                }`}
                id={`exp-tab-${item.toLowerCase()}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Experience Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="experience-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filterExperience.map((experience, index) => (
                <div className="experience-item" key={index}>
                  <div className="experience-item__marker">
                    <div className="experience-item__dot" />
                    {index < filterExperience.length - 1 && (
                      <div className="experience-item__line" />
                    )}
                  </div>
                  <div className="experience-item__content glass-card">
                    <h4 className="experience-item__title">
                      {experience.tags.includes("Work")
                        ? experience.works[0].name
                        : experience.year}
                    </h4>
                    {experience.works.map((work, wIndex) => (
                      <div key={wIndex} className="experience-item__detail">
                        <p className="experience-item__name">
                          {experience.tags.includes("Work")
                            ? experience.works[0].desc
                            : work.name}
                        </p>
                        {work.desc && !experience.tags.includes("Work") && (
                          <p className="experience-item__desc">{work.desc}</p>
                        )}
                        {experience.tags.includes("Work") && (
                          <p className="experience-item__desc">
                            {experience.year}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills, "skills-section__wrapper"),
  "skills"
);
