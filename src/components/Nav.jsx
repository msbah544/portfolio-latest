import React from "react";
import { moon, github, twitter } from "../assets/Icons";

const Nav = () => {
  return (
    <div className="flex justify-center sm:justify-between items-center">
      <div className="hidden sm:flex">
        <a href="https://www.github.com/msbah544" target="blank">
          {github}
        </a>
      </div>
      <ul className=" flex items-center gap-x-7 text-xl text-slate-800">
        <li className="  hover:border-b-2 hover:border-blue-800 hover:text-blue-700 transition ease-out duration-700">
          <a href="#projects">projects</a>
        </li>
        <li className="  hover:border-b-2 hover:border-blue-800 hover:text-blue-700 transition ease-out duration-700">
          <a href="#skills">skills</a>
        </li>
        <li className="  hover:border-b-2 hover:border-blue-800 hover:text-blue-700 transition ease-out duration-700">
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
