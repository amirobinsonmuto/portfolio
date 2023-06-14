import React from "react";
import Project from "./Project";
import projectData from "../data/projectData";

const Projects = () => {
  const projects = projectData;
  return (
    <section className="max-w-7xl mx-auto mt-24 mb-48" id="projects">
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
