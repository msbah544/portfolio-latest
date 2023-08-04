import React from "react";
import { github, link } from "../assets/Icons";

const ProjectCard = ({ project }) => {
  return (
    <div className=" md:w-80 shadow-lg shadow-gray-300 rounded-md  hover:shadow-lg transition ease-out duration-500 mb-5 bg-white">
      <div className="px-5">
        <div className="py-3 text-xl font-bold  flex justify-center">
          {project?.name}
        </div>
        <div className="py-5 text-lg text-center">{project?.description}</div>
        <div className="py-5 font-semibold flex gap-x-7 justify-center ">
          {Object.values(project?.tech_stack).map((item) => (
            <h1 className="underline" key={item}>
              {item}
            </h1>
          ))}
        </div>
        <div className=" flex justify-center items-center gap-x-7 py-5">
          <div>
            <a href={`${project?.github_link}`}>{github}</a>
          </div>
          <div className={project.demo_link == "" && `hidden`}>
            <a
              className=" hover:text-blue-800"
              href={`${project?.demo_link}`}
              target="_blank"
            >
              {link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
