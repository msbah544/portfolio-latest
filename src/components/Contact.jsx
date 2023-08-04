import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center" id="contact">
      <div className="">
        <h1 className="font-bold text-4xl uppercase text-center py-10">
          Contact
        </h1>
        <div className=" border-2 border-blue-800 px-5 md:px-20 bg-white">
          <ul className=" text-left text-lg">
            <li className="py-5 ">
              <span className="font-bold">Email:</span> momodoubah544@gmail.com
            </li>
            <li className="pb-5">
              <span className="font-bold">Phone:</span>+220 3981289
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
