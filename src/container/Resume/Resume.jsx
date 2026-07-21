import React from "react";
import { motion } from "framer-motion";
import { BsArrowLeft, BsDownload, BsEnvelope, BsPhone, BsGithub, BsLinkedin, BsGlobe } from "react-icons/bs";
import { usePageTransition } from "../../components/PageTransition/PageTransitionContext";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Resume.scss";

const Resume = () => {
  const { triggerTransition } = usePageTransition();

  const handleBackToHome = (e) => {
    e.preventDefault();
    triggerTransition(() => {
      window.location.hash = "";
    });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad Zamin resume.pdf";
    link.download = "Muhammad Zamin Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-section">
      {/* Top Header Actions */}
      <div className="resume-section__actions">
        <button className="btn-resume-back" onClick={handleBackToHome}>
          <BsArrowLeft /> <span>Back to Portfolio</span>
        </button>
        <button className="btn-resume-download" onClick={handleDownload}>
          <BsDownload /> <span>Download PDF</span>
        </button>
      </div>

      {/* Main Resume Sheet */}
      <motion.div 
        className="resume-sheet"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header Block */}
        <header className="resume-sheet__header">
          <h1 className="resume-name">Muhammad Zamin</h1>
          <p className="resume-subtitle">Specialized Honours B.Sc. in Computer Science</p>
          
          <div className="resume-contact-grid">
            <a href="tel:6477645530" className="contact-item">
              <BsPhone /> <span>647-764-5530</span>
            </a>
            <a href="mailto:zaminjamal.zj@gmail.com" className="contact-item">
              <BsEnvelope /> <span>zaminjamal.zj@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/mzamin/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <BsLinkedin /> <span>LinkedIn</span>
            </a>
            <a href="https://github.com/mz-pixel" target="_blank" rel="noopener noreferrer" className="contact-item">
              <BsGithub /> <span>GitHub</span>
            </a>
            <a href="https://mzamin.ca" target="_blank" rel="noopener noreferrer" className="contact-item">
              <BsGlobe /> <span>Portfolio</span>
            </a>
          </div>
        </header>

        {/* Education Section */}
        <section className="resume-sheet__section">
          <h2 className="resume-section-title">Education</h2>
          <div className="education-block">
            <div className="block-header">
              <h3 className="block-title">York University</h3>
              <span className="block-location">Toronto, ON</span>
            </div>
            <div className="block-sub">
              <span className="block-degree">Specialized Honours B.Sc. in Computer Science</span>
            </div>
            <div className="block-details">
              <p><strong>Relevant Coursework:</strong> Data Structures & Algorithms, Software Design, Machine Learning, Computer Security, Big Data, Data Mining, User Interface Design, Mobile Development</p>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="resume-sheet__section">
          <h2 className="resume-section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skills-category">
              <span className="category-label">Languages</span>
              <div className="skills-tags">
                {["JavaScript", "TypeScript", "Java", "Python", "SQL", "C", "Bash"].map(skill => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <span className="category-label">Frontend</span>
              <div className="skills-tags">
                {["React.js", "Next.js", "Vite", "Tailwind CSS", "Redux", "HTML", "shadcn/ui"].map(skill => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <span className="category-label">Backend</span>
              <div className="skills-tags">
                {["Node.js", "Express.js", "Spring Boot", "REST APIs", "WebSockets (Socket.IO)", "Flask"].map(skill => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <span className="category-label">Databases & Auth</span>
              <div className="skills-tags">
                {["PostgreSQL", "Supabase", "SQLite", "JWT", "OAuth", "MongoDB"].map(skill => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <span className="category-label">Tools & DevOps</span>
              <div className="skills-tags">
                {["Docker", "Git", "Postman", "Unix/Linux", "CI/CD", "NPM", "Spark", "Hadoop"].map(skill => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="resume-sheet__section">
          <h2 className="resume-section-title">Experience</h2>
          <div className="experience-list">
            <div className="experience-block">
              <div className="block-header">
                <h3 className="block-title">Front-End Developer</h3>
                <span className="block-date">Sep 2025 -- Present</span>
              </div>
              <div className="block-sub">
                <span className="block-company">Department of Computer Science, Lassonde School of Engineering, York University</span>
                <span className="block-location">Toronto, ON</span>
              </div>
              <ul className="bullet-list">
                <li>Developed a real-time virtual queue system for efficient handling of student service requests.</li>
                <li>Built a responsive frontend using React.js and Vite with modular components.</li>
                <li>Applied SDLC principles, translating wireframes into structured implementations.</li>
                <li>Implemented authentication, session management, and WebSockets for real-time updates.</li>
              </ul>
            </div>

            <div className="experience-block">
              <div className="block-header">
                <h3 className="block-title">Full-Stack Developer</h3>
                <span className="block-date">Jan 2026 -- Mar 2026</span>
              </div>
              <div className="block-sub">
                <span className="block-company">TMA Student Club, York University</span>
                <span className="block-location">Toronto, ON</span>
              </div>
              <ul className="bullet-list">
                <li>Built a full-stack RSVP platform with user registration and admin check-in mechanisms.</li>
                <li>Developed frontend with Next.js, React, TypeScript, and Framer Motion for smooth UX.</li>
                <li>Engineered scalable database architectures with Supabase and secure authentication using Clerk.</li>
                <li>Implemented secure ticket purchasing and automatic email confirmations using Stripe and Resend.</li>
                <li>Built an admin dashboard with QR code scanning for event-entry tracking.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="resume-sheet__section">
          <h2 className="resume-section-title">Projects</h2>
          <div className="projects-list">
            <div className="project-block">
              <div className="block-header">
                <h3 className="block-title">Image Classification via CNNs</h3>
                <span className="block-tech">PyTorch, Torchvision, NumPy, Matplotlib</span>
              </div>
              <ul className="bullet-list">
                <li>Developed a CNN for multi-class classification on the CIFAR-10 dataset.</li>
                <li>Achieved 82% testing accuracy through architecture optimization and hyperparameter tuning.</li>
                <li>Applied advanced augmentation and normalization using torchvision to improve performance.</li>
              </ul>
            </div>

            <div className="project-block">
              <div className="block-header">
                <h3 className="block-title">Custom Malware Detection using YARA</h3>
                <span className="block-tech">YARA, Linux, Reverse Engineering Tools</span>
              </div>
              <ul className="bullet-list">
                <li>Analyzed a Windows malware sample using static analysis to identify suspicious behaviors.</li>
                <li>Designed a custom YARA rule leveraging PE structure, anomalous timestamps, and string patterns.</li>
                <li>Engineered multi-condition detection logic and validated accuracy using binwalk and rabin2.</li>
              </ul>
            </div>

            <div className="project-block">
              <div className="block-header">
                <h3 className="block-title">B-Minor Compiler</h3>
                <span className="block-tech">C, Flex, Bison</span>
              </div>
              <ul className="bullet-list">
                <li>Built a C-like language compiler using Flex and Bison for lexical and syntax analysis.</li>
                <li>Implemented name resolution and semantic type checking to ensure logic and type safety.</li>
                <li>Built an x86-64 code generator with stack management, control flow handling, and function calls.</li>
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Resume, "resume-section__wrapper"),
  "resume",
  "app__whitebg"
);
