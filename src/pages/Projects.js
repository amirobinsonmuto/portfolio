import React from "react";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      title: "React Shopping Site",
      description: "lalalal",
      technologies: ["react", "JavaScript"],
      gitHubLink: "https://github.com/amirobinsonmuto/e-commerce",
      liveLink: "https://amirobinsonmuto.github.io/e-commerce/",
      imagePath: "sample-project.png",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto mt-12 mb-48">
      <h2 className="text-gray-800 h2">Projects</h2>
      {projects.map((project, index) => (
        <Project ket={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;
