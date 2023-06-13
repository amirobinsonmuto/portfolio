import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const Project = ({ index, project }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      try {
        const importedImage = await import(`../assets/${project.imagePath}`);
        setImageSrc(importedImage.default);
      } catch (error) {
        // Handle error loading the image
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, [project.imagePath]);

  return (
    <div className="grid grid-cols-2 p-12 gap-24 ">
      <div className="col-span-1">
        <p3 className="text-4xl">{project.title}</p3>
        <p className="my-6">{project.description}</p>
        <p>
          {project.technologies.map((tech) => (
            <span>{tech} </span>
          ))}
        </p>
        <div className="flex gap-2 my-3">
          <a href={project.gitHubLink}>
            <FaGithub size={24} color="black" />
          </a>
          <a href={project.liveLink}>
            <LuExternalLink size={24} color="black" />
          </a>
        </div>
      </div>
      <div
        className={`col-span-1 relative ${
          index % 2 === 0 ? "order-first" : ""
        }`}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            className="border-8 border-pink relative"
            alt={project.title}
          />
        )}
      </div>
    </div>
  );
};

export default Project;
