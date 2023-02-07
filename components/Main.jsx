import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tacking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi I'm <span className="text-[#5651e5]">Kiprotich Kimutai</span>
          </h1>
          <h1
            className="py-2 text-gray-700"
            style={{
              marginTop: "0px",
              marginBottom: "32px",
              color: "#fff",
              fontSize: "76px",
              lineHeight: "110%",
            }}
          >
            I'm a
            <Typewriter
              options={{
                strings: [
                  "Full-stack developer",
                  "React developer",
                  "Technical writer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            I’m probably the most passionate designer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I’m your guy.
          </p>
          <div className="flex justify-between items-center max-w-[330px] m-auto">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100">
              <BsPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
