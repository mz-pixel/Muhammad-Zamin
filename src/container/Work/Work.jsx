import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { AppWrap, MotionWrap } from "../../wrapper";
import { usePageTransition } from "../../components/PageTransition/PageTransitionContext";
import "./Work.scss";
import projects from "./projects";

const FILTERS = ["All", "WebApp", "Machine Learning", "Mobile Application"];

const Work = () => {
  const [tag, setTag] = useState("All");
  const { triggerTransition } = usePageTransition();

  const filtered = tag === "All"
    ? projects
    : projects.filter((p) => p.format === tag);

  const handleVisit = (e, url) => {
    e.preventDefault();
    triggerTransition(() => window.open(url, "_blank"));
  };

  return (
    <div className="work-section">
      {/* Header */}
      <div className="work-section__header">
        <span className="section-label">Selected Work</span>
        <h2 className="section-heading" id="work-heading">
          Projects
        </h2>
      </div>

      {/* Filter — plain text tabs */}
      <div className="work-section__filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setTag(f)}
            className={`work-filter ${tag === f ? "work-filter--active" : ""}`}
            id={`work-filter-${f.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project list */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tag}
          className="work-section__list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {filtered.map((work, index) => (
            <motion.article
              className="project-card"
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              id={`project-${work.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {/* ── Top row: index + title + type ── */}
              <div className="project-card__top">
                <span className="project-card__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="project-card__title">{work.title}</h3>
                <span className="project-card__type">{work.type}</span>
              </div>

              {/* ── Screenshot ── */}
              <div className="project-card__image-wrapper">
                <img
                  src={work.img}
                  alt={work.title}
                  className="project-card__image"
                />
              </div>

              {/* ── Description ── */}
              <p className="project-card__desc">{work.description}</p>

              {/* ── Metadata row ── */}
              <div className="project-card__meta">
                <div className="project-card__meta-item">
                  <span className="project-card__meta-label">Role</span>
                  <span className="project-card__meta-value">{work.role}</span>
                </div>
                <div className="project-card__meta-item">
                  <span className="project-card__meta-label">Stack</span>
                  <span className="project-card__meta-value tech-tag">
                    {work.tags.join(" · ")}
                  </span>
                </div>
                <div className="project-card__meta-item">
                  <span className="project-card__meta-label">Year</span>
                  <span className="project-card__meta-value">{work.year}</span>
                </div>
              </div>

              {/* ── Impact ── */}
              {work.impact && (
                <div className="project-card__impact">
                  <span className="project-card__impact-label">Impact</span>
                  <p className="project-card__impact-text">{work.impact}</p>
                </div>
              )}

              {/* ── Links ── */}
              <div className="project-card__links">
                {work.codeLink && (
                  <a
                    href={work.codeLink}
                    className="project-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                    <span>GitHub</span>
                  </a>
                )}
                {work.youtubeLink && (
                  <a
                    href={work.youtubeLink}
                    className="project-card__link project-card__link--youtube"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Demo"
                  >
                    <AiFillYoutube />
                    <span>Demo</span>
                  </a>
                )}
                {work.projectLink && (
                  <a
                    href={work.projectLink}
                    className="project-card__link project-card__link--visit"
                    onClick={(e) => handleVisit(e, work.projectLink)}
                    aria-label="Visit site"
                  >
                    <span>Visit →</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AppWrap(MotionWrap(Work, "work-section__wrapper"), "work");
