import React, { useState, useEffect, Fragment } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import experiencess from "./experiencess";
import skillss from "./skillss.js";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Expertise");
  const [filterExperience, setFilterExperience] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  var idx = 0;

  useEffect(() => {
    setExperiences(experiencess);
    setFilterExperience(
      experiencess.filter((experience) => experience.tags.includes("Expertise"))
    );
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      setFilterExperience(
        experiences.filter((experience) => experience.tags.includes(item))
      );
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div
        className="app__flex app__skills-desc"
        style={{
          width: "80%",
          height: "fit-content",
        }}
      >
        <p
          className="p-text"
          style={{
            color: "black",
          }}
        >
          I am a fourth year student at the York University, pursuing
          Specialized Honours BSc in Computer Science. I am a self-taught web
          developer and have been working with React for over two years now. I
          am also familiar with other web technologies such as Node.js,
          Express.js, and MongoDB. I am currently looking for a Software
          Engineering internship to gain work experience in the field.
        </p>
      </div>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skillss.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name + "skills"}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          <div className="app__skills-filter">
            {["Expertise", "Work", "Education"].map((item, index) => (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__skills-filter-item app__flex ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                <h2>{item}</h2>
                <div className="app__skills-filter-under"></div>
              </div>
            ))}
          </div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.1 }}
            className="app__skills-exp-content"
          >
            {filterExperience.map((experience, index) => (
              <motion.div
                className="app__skills-exp-item"
                key={
                  experience.tags.includes("Expertise")
                    ? index
                    : experience.year
                }
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">
                    {experience.tags.includes("Work")
                      ? experience.works[0].name
                      : experience.year}
                  </p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work) => {
                    idx++;
                    return (
                      <Fragment key={105 + idx}>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className={"app__skills-exp-work"}
                          key={idx + 20}
                        >
                          <h4 className="bold-text" id={work.name}>
                            {experience.tags.includes("Work")
                              ? experience.works[0].desc
                              : work.name}
                          </h4>
                          {work.desc && (
                            <p className="p-text" id={work.name}>
                              {experience.tags.includes("Work")
                                ? experience.year
                                : work.desc}
                            </p>
                          )}
                        </motion.div>
                      </Fragment>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
