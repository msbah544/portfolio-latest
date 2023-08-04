import React from "react";
import { github, twitter } from "../assets/Icons";

const About = () => {
  return (
    <div className="py-20 sm:px-10 flex  justify-center">
      <div className="text-center">
        <h1 className=" text-3xl font-bold">
          Hi, I am <span className=" text-blue-600">Momodou</span>
        </h1>
        <h1 className=" py-5 text-xl ">
          From the Gambia, Junior Frontend Web and Mobile app developer using
          (React/Next Js and React Native respectively). In my free time, I like
          to build web and mobile apps using the MERN stack .I'm passionate
          about creating quality Apps that meet all of the users needs and I
          love learning new techniques and technologies that allow me to make
          that happen.
        </h1>
        <p className=" text-xl py-5">
          Recently I have been learning how to build full stack
          applications(Mobile and Web) using Next JS. Currently, I am working on
          two personal projects, a web app(share prompt) using React/Next js and
          a mobile app using React Native(local market place). Below you will
          find descriptions of some of the latest projects I have been working
          on recently.The rest of my projects can be found on my github account.
        </p>
        <div className=" flex gap-x-7 justify-center items-center">
          <div>
            <a href="https://www.github.com/msbah544" target="blank">
              {github}
            </a>
          </div>
          <div>
            <a href="https://www.twitter.com/msbah544" target="blank">
              {twitter}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
