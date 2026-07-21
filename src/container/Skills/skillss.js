import { images } from "../../constants";

// Main skill categories
const skillss = [
  // Frontend
  { icon: images.javascript, name: "JavaScript / TypeScript", category: "Frontend" },
  { icon: images.react,      name: "React.js / Next.js",       category: "Frontend" },
  { icon: images.css,        name: "Tailwind CSS",             category: "Frontend" },
  { icon: images.html,       name: "HTML / CSS",               category: "Frontend" },
  { icon: images.sass,       name: "Redux & Vite",             category: "Frontend" },

  // Backend
  { icon: images.node,       name: "Node.js & Express.js",     category: "Backend" },
  { icon: images.java,       name: "Java & Spring Boot",       category: "Backend" },
  { icon: images.python,     name: "Python & Flask",           category: "Backend" },
  { icon: images.api,        name: "REST APIs & WebSockets",   category: "Backend" },

  // Databases & Tools
  { icon: images.mongoDB,    name: "PostgreSQL & Supabase",    category: "Databases & Tools" },
  { icon: images.mongoDB,    name: "MongoDB & SQLite",         category: "Databases & Tools" },
  { icon: images.git,        name: "Docker & Git",             category: "Databases & Tools" },
  { icon: images.figma,      name: "CI/CD & Postman",          category: "Databases & Tools" },
  { icon: images.cpp,        name: "C & Bash / Unix",          category: "Databases & Tools" },
];

// Currently learning & Advanced
export const currentlyLearning = [
  { name: "Spark & Hadoop" },
  { name: "CI/CD Deployment" },
  { name: "System Security" },
  { name: "Cloud Architecture" },
];

export default skillss;
