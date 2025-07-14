import { images } from "../../constants";

let projects = [
  {
    codeLink: "https://github.com/mz-pixel/yelp",
    description:
      "Developed a web application using Java/Spring Web for backend and Javascript/React for frontend, while using Yelp API to fetch relevant results for user queries",
    img: images.yelp,
    tags: ["React", "SpringBoot", "Java", "JavaScript"],
    title: "Business Finder",
    made: "",
    youtubeLink: "https://youtu.be/tsxTDkzHWOY",
    format: "WebApp",
  },
  {
    codeLink: "https://github.com/mz-pixel/Todo-list",
    youtubeLink: "https://youtu.be/pCWTk28vzvE",
    description:
      "Crafted a todo list application utilizing MongoDB and Express.js. Implemented CRUD operations for users to be able to delete and add tasks.",
    img: images.todo,
    projectLink: "https://to-do-list-48an.onrender.com/",
    tags: ["MongoDB", "Express", "ejs", "Node JS"],
    title: "Simple To-do List",
    made: "",
    format: "WebApp",
  },
  {
    description:
      "Developed a medical appointment app using SQL and Express.js. Implemented a starvation-free scheduling algorithm to ensure fair and timely bookings.",
    img: images.medsync,
    // projectLink: "https://medsync.onrender.com/",
    codeLink: "https://github.com/mz-pixel/CtrlHackDel-Submission",
    tags: ["React", "Express", "SQL", "Node JS"],
    title: "MedSync",
    made: "",
    youtubeLink: "https://youtu.be/vg_25TuxuG8",
    format: "WebApp",
  },
  {
    description: "To be added.",
    img: images.python,
    // projectLink: "https://medsync.onrender.com/",
    // codeLink: "https://github.com/mz-pixel/medsync",
    tags: ["SciKit-Learn", "Pandas", "Numpy", "TensorFlow"],
    title: "EECS 3404: Applied Machine Learning",
    made: "",
    // youtubeLink: "https://www.youtube.com/watch?v=1b2k0d3g4e8",
    format: "Machine Learning",
  },
];

export default projects;
