import React from "react";
import { IconContext } from "react-icons";

const TechIcon = ({ icon: Icon, name, color }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: "5rem", color: color }}>
        <Icon className="mx-auto mt-3 mb-3 opacity-70" />
      </IconContext.Provider>
      <p className="text-center mb-2 font-secondary">{name}</p>
    </div>
  );
};

export default TechIcon;
