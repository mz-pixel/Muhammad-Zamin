import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { AppWrap, MotionWrap } from "../../wrapper";
import { usePageTransition } from "../../components/PageTransition/PageTransitionContext";
import "./Work.scss";
import projects from "./projects";

const FILTERS = ["All", "WebApp", "Machine Learning", "Mobile Application", "WIP"];

const Work = () => {
  const [tag, setTag] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeMobileProject, setActiveMobileProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const { triggerTransition } = usePageTransition();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filtered = tag === "All"
    ? projects
    : projects.filter((p) => p.format === tag);

  const displayProject = hoveredProject || selectedProject || filtered[0];

  const handleVisit = (e, url) => {
    e.stopPropagation(); // Prevent trigger change
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
            onClick={() => {
              setTag(f);
              setHoveredProject(null);
              setSelectedProject(null);
              setActiveMobileProject(null);
            }}
            className={`work-filter ${tag === f ? "work-filter--active" : ""}`}
            id={`work-filter-${f.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="work-section__container">
        {/* Left Column: Project List */}
        <div className="work-section__list-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={tag}
              className="work-section__list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.map((work, index) => {
                const isCurrent = displayProject?.title === work.title;
                const isExpanded = isMobile
                  ? activeMobileProject === work.title
                  : hoveredProject?.title === work.title;

                return (
                  <motion.div
                    className={`project-row ${isCurrent ? "project-row--active" : ""} ${
                      !isMobile && hoveredProject?.title === work.title ? "project-row--hovered" : ""
                    }`}
                    key={work.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => !isMobile && setHoveredProject(work)}
                    onMouseLeave={() => !isMobile && setHoveredProject(null)}
                    onClick={() => {
                      if (isMobile) {
                        setActiveMobileProject((prev) => (prev === work.title ? null : work.title));
                      } else {
                        setSelectedProject(work);
                      }
                    }}
                    id={`project-${work.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {/* ── Main row content ── */}
                    <div className="project-row__main">
                      <div className="project-row__left">
                        <span className="project-row__index">
                          /{String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="project-row__title">{work.title}</h3>
                      </div>

                      <div className="project-row__meta-right">
                        <span className={`project-row__type ${work.format === "WIP" ? "project-row__type--wip" : ""}`}>
                          {work.type}
                        </span>
                        {isMobile && (
                          <div className="project-row__links">
                            {work.codeLink && (
                              <a
                                href={work.codeLink}
                                className="project-row__link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <AiFillGithub />
                              </a>
                            )}
                            {work.youtubeLink && (
                              <a
                                href={work.youtubeLink}
                                className="project-row__link project-row__link--youtube"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Demo"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <AiFillYoutube />
                              </a>
                            )}
                            {work.projectLink && (
                              <a
                                href={work.projectLink}
                                className="project-row__link project-row__link--visit"
                                onClick={(e) => handleVisit(e, work.projectLink)}
                                aria-label="Visit site"
                              >
                                <span>Visit →</span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* ── Accordion expanded details (Mobile only) ── */}
                    {isMobile && (
                      <motion.div
                        className="project-row__details"
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : 0,
                          opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="project-row__details-inner">
                          <div className="project-row__mobile-image">
                            <img
                              src={work.img}
                              alt={work.title}
                              className="project-row__mobile-img"
                            />
                          </div>
                          <p className="project-row__desc">{work.description}</p>
                          
                          <div className="project-row__subdetails">
                            <div className="project-row__subdetail-item">
                              <span className="project-row__subdetail-label">Role</span>
                              <span className="project-row__subdetail-value">{work.role}</span>
                            </div>
                            <div className="project-row__subdetail-item">
                              <span className="project-row__subdetail-label">Stack</span>
                              <span className="project-row__subdetail-value tech-tag">
                                {work.tags.join(" · ")}
                              </span>
                            </div>
                            <div className="project-row__subdetail-item">
                              <span className="project-row__subdetail-label">Year</span>
                              <span className="project-row__subdetail-value">{work.year}</span>
                            </div>
                          </div>

                          {work.impact && (
                            <div className="project-row__impact">
                              <span className="project-row__impact-label">Impact</span>
                              <p className="project-row__impact-text">{work.impact}</p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Sticky Showcase Preview */}
        {!isMobile && displayProject && (
          <div className="work-section__showcase-col">
            <div className="work-showcase__sticky-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayProject.title}
                  className="work-showcase__card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="work-showcase__image-container">
                    <img
                      src={displayProject.img}
                      alt={displayProject.title}
                      className="work-showcase__image"
                    />
                    <div className="work-showcase__image-overlay" />
                  </div>

                  <div className="work-showcase__content">
                    <div className="work-showcase__header">
                      <span>{displayProject.year}</span>
                      <span>•</span>
                      <span>{displayProject.role}</span>
                      <span>•</span>
                      <span className={`work-showcase__type-badge ${displayProject.format === "WIP" ? "project-row__type--wip" : ""}`}>
                        {displayProject.type}
                      </span>
                    </div>

                    <h3 className="work-showcase__title">{displayProject.title}</h3>
                    
                    <p className="work-showcase__desc">{displayProject.description}</p>

                    <div className="work-showcase__tags">
                      {displayProject.tags.join("  ·  ")}
                    </div>

                    {displayProject.impact && (
                      <div className="work-showcase__impact">
                        <span className="work-showcase__impact-label">Impact</span>
                        <p className="work-showcase__impact-text">{displayProject.impact}</p>
                      </div>
                    )}

                    <div className="work-showcase__footer-links">
                      {displayProject.projectLink && (
                        <a
                          href={displayProject.projectLink}
                          className="btn-editorial btn-editorial--accent"
                          onClick={(e) => handleVisit(e, displayProject.projectLink)}
                        >
                          Visit Site →
                        </a>
                      )}
                      {displayProject.codeLink && (
                        <a
                          href={displayProject.codeLink}
                          className="btn-editorial"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillGithub /> Github
                        </a>
                      )}
                      {displayProject.youtubeLink && (
                        <a
                          href={displayProject.youtubeLink}
                          className="btn-editorial btn-editorial--youtube"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillYoutube /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Work, "work-section__wrapper"), "work");
