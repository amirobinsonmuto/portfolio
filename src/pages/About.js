import React from "react";
import TechIcon from "./TechIcon";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
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
    { icon: FaBootstrap, name: "Bootstrap", color: "#7952b3" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06b6d4" },
    { icon: SiStyledcomponents, name: "Styled Components", color: "#db7093" },
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
          Hey there! I'm Ami Robinson, a front-end developer who's all about
          React.js. With a solid background in web development and a knack for
          managing local government websites, I bring a wealth of expertise to
          every project. By keeping up with the latest trends and leveraging
          innovative techniques, I deliver polished and visually stunning
          websites that truly make an impact. Let's team up and shape the future
          of the web together. <br />
          <br />
          When I'm not coding, you can often find me unwinding by a serene lake
          or riverside enjoying some quality camping time with my wonderful
          hubby, adorable baby, and our lovable husky mix puppy.
        </div>
        <div className="tech-icons mt-20 mx-auto flex justify-center items-center">
          {techStack.map((tech, index) => (
            <TechIcon
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
