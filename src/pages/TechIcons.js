import React from "react";
import { IconContext } from "react-icons";

const TechIcons = ({ icon: Icon, name, color }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: "5rem", color: color }}>
        <Icon className="mx-auto mt-3 mb-1" />
      </IconContext.Provider>
      <p className="text-center mb-2">{name}</p>
    </div>
  );
};

export default TechIcons;
