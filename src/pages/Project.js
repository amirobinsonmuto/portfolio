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
    <div className="font-secondary md:grid grid-cols-2 p-12 m-12 gap-24 border shadow hover:border-2 hover:shadow-lg rounded-lg text-primary">
      <div className="col-span-1">
        <p3 className="text-2xl text-gray-800 uppercase tracking-widest text-center mb-10">
          {project.title}
        </p3>
        <p className="my-6">{project.description}</p>
        <hr className="bg-gray-300 h-px border-none" />
        <br />
        <p className="italic">
          Built using&nbsp;
          <ul className="inline-block">
            {project.technologies.map((tech, index) => (
              <li key={index} className="inline">
                {tech}
                {index !== project.technologies.length - 1
                  ? index === project.technologies.length - 2
                    ? " and "
                    : ", "
                  : ""}
              </li>
            ))}
          </ul>
        </p>
        <div className="flex gap-2 my-3">
          <a
            href={project.gitHubLink}
            target="blank"
            className={`${
              project.gitHubLink === null ? "hidden" : ""
            } text-primary hover:text-secondary ease-linear transition-all duration-150`}
          >
            <FaGithub size={24} />
          </a>
          <a
            href={project.liveLink}
            target="blank"
            className={`${
              project.liveLink === null ? "hidden" : ""
            } text-primary hover:text-secondary ease-linear transition-all duration-150`}
          >
            <LuExternalLink size={24} />
          </a>
        </div>
      </div>
      <div
        className={`col-span-1 relative mt-6 ${
          index % 2 === 0 ? "order-first" : ""
        }`}
      >
        {imageSrc && (
          <img src={imageSrc} className="relative" alt={project.title} />
        )}
      </div>
    </div>
  );
};

export default Project;
