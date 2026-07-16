import { images } from "../../constants";

// Main skill categories
const skillss = [
  // Frontend
  { icon: images.html,       name: "HTML / CSS",    category: "Frontend" },
  { icon: images.javascript, name: "JavaScript",    category: "Frontend" },
  { icon: images.react,      name: "React",         category: "Frontend" },
  { icon: images.sass,       name: "SASS",          category: "Frontend" },

  // Backend
  { icon: images.node,       name: "Node.js",       category: "Backend" },
  { icon: images.express,    name: "Express.js",    category: "Backend" },
  { icon: images.java,       name: "Java / Spring", category: "Backend" },
  { icon: images.python,     name: "Python",        category: "Backend" },

  // Databases & Tools
  { icon: images.mongoDB,    name: "MongoDB",       category: "Databases & Tools" },
  { icon: images.git,        name: "Git",           category: "Databases & Tools" },
  { icon: images.figma,      name: "Figma",         category: "Databases & Tools" },
];

// Currently learning
export const currentlyLearning = [
  { name: "Docker" },
  { name: "AWS" },
  { name: "CI/CD" },
  { name: "TypeScript" },
];

export default skillss;
