import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import skillss, { currentlyLearning } from "./skillss.js";
import experiencess from "./experiencess";

// Group skills by category
const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = item[key];
    acc[k] = acc[k] ? [...acc[k], item] : [item];
    return acc;
  }, {});

const CATEGORIES = ["Frontend", "Backend", "Databases & Tools"];

const education = experiencess.filter((e) => e.tags.includes("Education"));
const work      = experiencess.filter((e) => e.tags.includes("Work"));

const Skills = () => {
  const grouped = groupBy(skillss, "category");

  return (
    <div className="skills-section">
      {/* Header */}
      <div className="skills-section__header">
        <span className="section-label">Skills & Experience</span>
        <h2 className="section-heading" id="skills-heading">
          What I work with
        </h2>
      </div>

      {/* Skills grid */}
      <div className="skills-categories">
        {CATEGORIES.map((cat, ci) => (
          <motion.div
            className="skills-category"
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="skills-category__label">{cat}</div>
            <div className="skills-category__rule" />
            <ul className="skills-category__list">
              {(grouped[cat] || []).map((skill) => (
                <li key={skill.name} className="skill-row">
                  <span className="skill-row__icon">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-row__img"
                    />
                  </span>
                  <span className="skill-row__name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Currently Learning */}
        <motion.div
          className="skills-category skills-category--learning"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="skills-category__label">Currently Learning</div>
          <div className="skills-category__rule skills-category__rule--accent" />
          <ul className="skills-category__list">
            {currentlyLearning.map((s) => (
              <li key={s.name} className="skill-row skill-row--dim">
                <span className="skill-row__dot" />
                <span className="skill-row__name">{s.name}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Experience */}
      <div className="experience-section">
        <span className="section-label">Experience</span>
        <div className="experience-cols">
          {/* Education */}
          <motion.div
            className="exp-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="exp-col__label">Education</div>
            <div className="exp-col__rule" />
            {education.map((e, i) => (
              <div className="exp-entry" key={i}>
                <div className="exp-entry__title">{e.year}</div>
                {e.works.map((w, wi) => (
                  <div key={wi} className="exp-entry__sub">{w.name}</div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Work */}
          <motion.div
            className="exp-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="exp-col__label">Work</div>
            <div className="exp-col__rule" />
            {work.map((e, i) => (
              <div className="exp-entry" key={i}>
                <div className="exp-entry__title">{e.works[0].name}</div>
                <div className="exp-entry__sub">{e.year}</div>
                {e.works[0].desc && (
                  <div className="exp-entry__desc">{e.works[0].desc}</div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills, "skills-section__wrapper"),
  "skills"
);
