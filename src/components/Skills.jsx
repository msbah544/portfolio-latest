import React from "react";

const Skills = () => {
  const skills = { 1: "HTML", 2: "CSS", 3: "JAVASCRIPT" };
  const skills2 = { 1: "React Js", 2: "React Native", 3: "Next Js" };
  const skills3 = { 1: "TAILWIND CSS", 2: "BOOTSTRAP" };

  return (
    <div id="skills">
      <h1 className=" text-center text-4xl font-bold">SKILLS</h1>
      <div className="flex justify-center items-center py-10">
        <div className="">
          <ul className=" flex gap-x-7 ">
            {Object.values(skills2).map((skill) => (
              <li key={skill} className="py-3 px-5 md:px-20 shadow-lg bg-white">
                {skill}
              </li>
            ))}
          </ul>

          <ul className=" flex gap-x-7 my-5">
            {Object.values(skills).map((skill) => (
              <li key={skill} className="py-3 px-5 md:px-20 shadow-lg bg-white">
                {skill}
              </li>
            ))}
          </ul>
          <ul className=" flex gap-x-7">
            {Object.values(skills3).map((skill) => (
              <li key={skill} className="py-3 px-5 md:px-20 shadow-lg bg-white">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
