import React from "react";
import TechIcons from "./TechIcons";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { SiWebpack } from "react-icons/si";
import { DiNpm } from "react-icons/di";

const About = () => {
  const techStack = [
    { icon: AiFillHtml5, name: "HTML", color: "#E34C26" },
    { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
    { icon: SiJavascript, name: "JavaScript", color: "#D3C932" },
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: SiJest, name: "Jest", color: "#C21325" },
    { icon: BsGit, name: "Git", color: "#F05032" },
    { icon: SiWebpack, name: "Webpack", color: "#8DD6F9" },
    { icon: DiNpm, name: "NPM", color: "#CB3837" },
  ];

  return (
    <section className="pt-10 pb-10 relative bg-pink" id="about">
      <div
        className="-mt-20 top-0 left-0 right-0 w-full absolute h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-pink fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto m-12">
        <h2 className="text-gray-800 font-secondary uppercase  text-4xl tracking-widest text-center mb-10">
          About Me
        </h2>
        <div className="text-xl text-primary mx-12 md:mx-24 leading-relaxed text-center font-secondary">
          I'm Ami Robinson, a front-end developer specializing in React.js. With
          a strong background in web development and experience managing local
          government websites, I bring a wealth of expertise to every project.
          My portfolio showcases my ability to seamlessly blend functionality
          and aesthetics, creating engaging and user-friendly web applications.
          By staying on top of the latest trends and leveraging innovative
          techniques, I deliver polished and visually appealing websites that
          leave a lasting impression. Let's collaborate and shape the future of
          the web together.
        </div>
        <div className="tech-icons mt-20 mx-auto">
          {techStack.map((tech, index) => (
            <TechIcons
              key={index}
              icon={tech.icon}
              name={tech.name}
              color={tech.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
