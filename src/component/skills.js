import React from 'react'
import {
  FaReact,
  FaCss3Alt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiNextdotjs, SiJavascript,SiHtml5,SiTailwindcss  } from "react-icons/si";

const Skills = () => {
  return (
    <div
      name="skills"
      className=" h-full font-mono  text-gray-600 dark:text-white"
    >
      <div className="flex flex-col items-center justify-center p-4 pt-10 ">
        <div className=" w-full md:pl-40">
          <h1 className="text-4xl text-start md:text-5xl font-extrabold border-b md:w-[600px] font-roboto pb-4 ">
            Skills
          </h1>
        </div>
        <div className="max-w-4xl md:text-xl pt-4">
          <p>
            Over the years in software development, I have garnered foundational
            skills and knowledge in technical and also non technical skills as
            below:
          </p>
        </div>
        <div className="grid grid-cols-4 md:flex pt-4 gap-8 text-gray-600 dark:text-gray-300">
          <FaReact size={50} />
          <SiNextdotjs size={50} />
          <SiJavascript size={50} />
          <SiHtml5 size={50} />
          <SiTailwindcss size={50} />
          <FaCss3Alt size={50} />
          <FaGithub size={50} />
          <FaBootstrap size={50} />
        </div>
        <div className="pt-6">
          <ol className="p-2 list-disc">
            <li>
              <b>Testing</b> - Foundational understanding in testing eg:Jest.{" "}
            </li>
            <li>
              <b>Databases</b> - Proficient in MongoDB & MySQL.
            </li>
            <li className="font-bold">Great communication.</li>
            <li className="font-bold">Teamwork & collaboration.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Skills