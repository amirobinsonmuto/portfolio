import React from "react";
import { MdWebAsset } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { TbTool } from "react-icons/tb";

const Services = () => {
  return (
    <section className="pt-10 pb-10 relative bg-pink">
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
      <div className="container mx-auto">
        <h2 className="text-gray-800 h2">About Me</h2>

        <div>

        </div>
        <img src="../../../assets/ami.jpeg"></img>

       
      </div>
    </section>
  );
};

export default Services;
