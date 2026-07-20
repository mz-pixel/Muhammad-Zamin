import { images } from "../../constants";

const projects = [
  {
    title: "Orbit",
    description:
      "A real-time workspace collaboration platform (similar to Slack/Teams) featuring multi-tenant workspaces, real-time messaging, typing indicators, presence tracking, and collaborative rich-text documents.",
    img: images.orbit_dashboard,
    tags: [
      "Next.js",
      "Express",
      "TypeScript",
      "Socket.IO",
      "PostgreSQL",
      "Prisma",
      "Zustand",
      "Docker",
    ],
    role: "Full Stack Developer",
    type: "WIP / WebApp",
    year: "In Progress",
    impact:
      "Completed: WebSocket-based live chat, user online presence sync, and workspace switcher. In Progress: TipTap + Yjs real-time collaborative editing.",
    codeLink: "https://github.com/mz-pixel/orbit-frontend",
    projectLink: null,
    format: "WIP",
  },
  {
    title: "Hayaat Banquet Registration & Admin Portal",
    description:
      "A web application using Java/Spring for the backend and React for the frontend, integrating the Yelp API for location-based business search and discovery.",
    img: images.hayaat,
    tags: ["Next.js", "Stripe", "Resend", "Tailwind", "Framer-motion"],
    role: "Full Stack Developer",
    type: "WebApp",
    year: "2025/26",
    impact:
      "Hosted over 300 registrants on the website with on-site payments generating over $7500 in revenue",
    projectLink: "https://hayaat.thaqalayn.ca",
    format: "WebApp",
  },
  {
    title: "VQM",
    description:
      "A Virtual Queue Management application designed to allow customers to join and track queues virtually in real time, featuring an interactive admin/staff dashboard to manage queues and view customer analytics.",
    img: images.vqm,
    tags: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
    role: "Full Stack Developer",
    type: "WebApp",
    year: "2025/26",
    impact:
      "Implemented full real-time queue synchronization and status updates under 1 second using Socket.IO.",
    codeLink: "https://github.com/mz-pixel/VQM-AHCH",
    projectLink: null,
    format: "WebApp",
  },
  {
    title: "ShareLyst",
    description:
      "A mobile bill-splitting application built with React Native. Features SQLite local storage, user authentication, and real-time group expense tracking.",
    img: images.sharelyst,
    tags: ["React Native", "SQLite", "Expo", "TypeScript"],
    role: "Mobile Developer",
    type: "Mobile Application",
    year: "2024",
    impact:
      "Built end-to-end authentication and expense tracking across shared groups with offline SQLite persistence.",
    codeLink: "https://github.com/Sharelyst/Sharelyst",
    youtubeLink: "https://www.youtube.com/watch?v=UxKVCL1k2H4",
    projectLink: null,
    format: "Mobile Application",
  },
  {
    title: "MedSync",
    description:
      "A medical appointment scheduling application using SQL and Express.js. Implemented a starvation-free scheduling algorithm to ensure fair and timely bookings.",
    img: images.medsync,
    tags: ["React", "Express", "SQL", "Node.js"],
    role: "Full Stack Developer",
    type: "WebApp",
    year: "2024",
    impact:
      "Designed a starvation-free scheduling algorithm that prevents priority inversion in appointment queues.",
    codeLink: "https://github.com/mz-pixel/MedSync",
    youtubeLink: "https://youtu.be/vg_25TuxuG8",
    projectLink: null,
    format: "WebApp",
  },
  {
    title: "EECS 3404: Applied ML",
    description:
      "Machine learning coursework applying classification, regression, and neural network models to real-world datasets using Python's scientific computing stack.",
    img: images.python,
    tags: ["SciKit-Learn", "Pandas", "NumPy", "TensorFlow"],
    role: "ML Engineer",
    type: "Machine Learning",
    year: "2024",
    impact:
      "Achieved 91% accuracy on the final classification project using an ensemble SVM + decision tree model.",
    codeLink: null,
    youtubeLink: null,
    projectLink: null,
    format: "Machine Learning",
  },
  {
    title: "To-do List",
    description:
      "A full-stack todo list application with a RESTful backend using MongoDB and Express.js. Implemented complete CRUD operations and persistent data storage.",
    img: images.todo,
    tags: ["MongoDB", "Express", "EJS", "Node.js"],
    role: "Full Stack Developer",
    type: "WebApp",
    year: "2023",
    impact:
      "Deployed to production with live CRUD operations and persistent MongoDB storage.",
    codeLink: "https://github.com/mz-pixel/Todo-list",
    youtubeLink: "https://youtu.be/pCWTk28vzvE",
    projectLink: "https://to-do-list-48an.onrender.com/",
    format: "WebApp",
  },
  {
    title: "Business Finder",
    description:
      "A web application using Java/Spring for the backend and React for the frontend, integrating the Yelp API for location-based business search and discovery.",
    img: images.yelp,
    tags: ["React", "Spring Boot", "Java", "Yelp API"],
    role: "Full Stack Developer",
    type: "WebApp",
    year: "2024",
    // impact:
    // "Integrated real-time Yelp API data with custom caching, reducing redundant API calls by ~60%.",
    codeLink: "https://github.com/mz-pixel/yelp",
    youtubeLink: "https://youtu.be/tsxTDkzHWOY",
    projectLink: null,
    format: "WebApp",
  },
];

export default projects;
