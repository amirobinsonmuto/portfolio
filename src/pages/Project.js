import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const Project = ({ project }) => {
  return (
    <div>
      <div>
        <p3>{project.title}</p3>
        <p>{project.description}</p>
        <p>
          {project.technologies.map((tech) => (
            <span>{tech} </span>
          ))}
        </p>
        <a href={project.gitHubLink}>
          <FaGithub size={24} color="black" />
        </a>
        <a href={project.liveLink}>
          <LuExternalLink size={24} color="black" />
        </a>
      </div>
      <img src={`../assets/${project.imagePath}`} alt={project.title} />
    </div>
  );
};

export default Project;
