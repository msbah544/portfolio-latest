import { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-gradient-to-br from-white to-gray-100 p-10  lg:px-40">
      <Nav />
      <div className=" ">
        <About />
      </div>
      <Projects />
      <Skills />
      <Contact />
      <div className=" text-center py-5 font-bold text-blue-800">
        Created by Momodou using{" "}
        <code className=" text-red-400">React JS and Tailwind</code>, 03/08/2023
      </div>
    </div>
  );
}

export default App;
