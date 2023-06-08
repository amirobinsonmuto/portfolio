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
        <h2 className="text-gray-800 h2">What we can do for you</h2>

        <div className="flex flex-wrap cards">
          <div className="w-full md:w-4/12 px-4 text-center card">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-8 py-5 flex-auto">
                <MdWebAsset className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary" />
                <h4 className="text-xl font-semibold text-gray-800">
                  Websites
                </h4>
                <p className="mt-2 mb-4 text-gray-700 text-justify">
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.Adipisicing
                  excepteur ut ut eu laborum ipsum dolore. Ullamco proident ut
                  sint commodo elit. Labore tempor proident aliqua non veniam
                  magna dolore quis laboris. Nulla ex id consectetur commodo.
                  Lorem nisi duis reprehenderit id culpa. Incididunt occaecat
                  reprehenderit cupidatat dolor ad incididunt ipsum exercitation
                  commodo tempor consequat labore ut.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 px-4 text-center card">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-8 py-5 flex-auto">
                <MdWeb className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary" />
                <h4 className="text-xl font-semibold text-gray-800">
                  Full-stack Apps
                </h4>
                <p className="mt-2 mb-4 text-gray-700 text-justify">
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.Adipisicing
                  excepteur ut ut eu laborum ipsum dolore. Ullamco proident ut
                  sint commodo elit. Labore tempor proident aliqua non veniam
                  magna dolore quis laboris. Nulla ex id consectetur commodo.
                  Lorem nisi duis reprehenderit id culpa. Incididunt occaecat
                  reprehenderit cupidatat dolor ad incididunt ipsum exercitation
                  commodo tempor consequat labore ut.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 px-4 text-center card">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-8 py-5 flex-auto">
                <TbTool className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary" />
                <h4 className="text-xl font-semibold text-gray-800">
                  Maintenance
                </h4>
                <p className="mt-2 mb-4 text-gray-700 text-justify">
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.Adipisicing
                  excepteur ut ut eu laborum ipsum dolore. Ullamco proident ut
                  sint commodo elit. Labore tempor proident aliqua non veniam
                  magna dolore quis laboris. Nulla ex id consectetur commodo.
                  Lorem nisi duis reprehenderit id culpa. Incididunt occaecat
                  reprehenderit cupidatat dolor ad incididunt ipsum exercitation
                  commodo tempor consequat labore ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
