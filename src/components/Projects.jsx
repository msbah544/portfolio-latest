import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Phonebook web app",
    description:
      "This App allows users to Add,Edit,Delete and Search for contacts by keyword. filtering by category will also be implemented soon",
    tech_stack: { 1: "React", 2: "Tailwind", 3: "Local Storage" },
    github_link: "https://github.com/msbah544/phonebook-app",
    demo_link: "https://msbah-phonebook.netlify.app/",
  },
  {
    name: "Todo App - frontendmentor challenge ",
    description:
      "This is an app inspired by frontendmentor.io . A todo app with Create, Read, Update, Delete operations and other features including light and dark theme toggling. ",
    tech_stack: { 1: "React", 2: "Tailwind", 3: "Local Storage" },
    github_link:
      "https://github.com/msbah544/todo-app-frontendmentor-challenge",
    demo_link: "https://msbah-todoapp.netlify.app/",
  },
  {
    name: "Share Prompt web app - (In Progress)",
    description:
      "This is my first Next js application which I am currently working on to test my knowledge of full stack development using Next js. Features include Authentication, Protecting API routes, CRUD operations with mongo DB",
    tech_stack: { 1: "React/Next js", 2: "Tailwind", 3: "Mongo DB" },
    github_link: "https://github.com/msbah544/share-prompt",
    demo_link: "",
  },
  {
    name: "foodOrder mobile app",
    description:
      "This is a mobile app built with React Native. It was specifically built as a prototype for a school that wanted students to order food from the canteen using an app, which was requested by the company I was doing Interns with.",
    tech_stack: { 1: "React Native", 2: "Firebase", 3: "React Native Paper" },
    github_link: "https://github.com/msbah544/food-order-app",
    demo_link: "",
  },
  {
    name: "gps area/distance calculator mobile app",
    description:
      "A Geographical Area / Distance calculator mobile app built using React Native. The App calculates Area or Distance by walking. Drawing on Map is yet to be implemented.",
    tech_stack: { 1: "React Native", 2: "UI kitten" },
    github_link: "https://github.com/msbah544/gps_fields_measure",
    demo_link: "",
  },
  {
    name: "I made a Clone of my Twitter profile",
    description:
      "This project is a clone of the official Twitter mobile app user profile. This project was built purposely to test my React Native skills 😊. Although I have others for the same purpose, I decided to put this one because it's worth seeing 🔥. No indication that it's a clone 💯",
    tech_stack: { 1: "React Native" },
    github_link: "https://github.com/msbah544/twitter-clone",
    demo_link: "",
  },
];

const Projects = () => {
  return (
    <div>
      <h1 className=" text-center text-4xl font-bold" id="projects">
        PROJECTS (Mobile & Web)
      </h1>
      <div className="flex justify-center items-center py-10">
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-x-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
