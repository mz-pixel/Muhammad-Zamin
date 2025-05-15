import { images } from "../../constants";

let projects = [
  {
    codeLink: "https://github.com/mz-pixel/yelp",
    description:
      "Developed a web application using Java/Spring Web for backend and Javascript/React for frontend, while using Yelp API to fetch relevant results for user queries",
    img: images.yelp,
    // projectLink: "https://yelp-app-l3jg.onrender.com/",
    tags: ["React", "SpringBoot", "Java", "JavaScript"],
    title: "Business Finder",
    made: "",
  },
  {
    codeLink: "https://github.com/mz-pixel/Todo-list",
    description:
      "Crafted a todo list application utilizing MongoDB and Express.js. Implemented CRUD operations for users to be able to delete and add tasks.",
    img: images.todo,
    projectLink: "https://to-do-list-48an.onrender.com/",
    tags: ["MongoDB", "Express", "ejs", "Node JS"],
    title: "A To-do List",
    made: "",
  },
  {
    description: "Coming Soon",
    img: images.cs,
    projectLink: "",
    tags: ["Love 💖"],
    title: "MedSync",
    made: "",
  },
];

export default projects;
