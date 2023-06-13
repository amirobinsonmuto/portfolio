import React from "react";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      title: "React Shopping Site",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      technologies: ["React", "JavaScript"],
      gitHubLink: "https://github.com/amirobinsonmuto/e-commerce",
      liveLink: "https://amirobinsonmuto.github.io/e-commerce/",
      imagePath: "sample-project.png",
    },
    {
      title: "React Shopping Site",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      technologies: ["React", "JavaScript"],
      gitHubLink: "https://github.com/amirobinsonmuto/e-commerce",
      liveLink: "https://amirobinsonmuto.github.io/e-commerce/",
      imagePath: "sample-project.png",
    },
    {
      title: "React Shopping Site",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      technologies: ["React", "JavaScript"],
      gitHubLink: "https://github.com/amirobinsonmuto/e-commerce",
      liveLink: "https://amirobinsonmuto.github.io/e-commerce/",
      imagePath: "sample-project.png",
    },
    {
      title: "React Shopping Site",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      technologies: ["React", "JavaScript"],
      gitHubLink: "https://github.com/amirobinsonmuto/e-commerce",
      liveLink: "https://amirobinsonmuto.github.io/e-commerce/",
      imagePath: "sample-project.png",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto mt-24 mb-48">
      <h2 className="text-gray-800 font-secondary uppercase  text-4xl tracking-widest text-center mb-10">
        Projects
      </h2>
      {projects.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))}
    </section>
  );
};

export default Projects;
