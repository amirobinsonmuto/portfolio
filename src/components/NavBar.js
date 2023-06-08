import React from "react";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldCollapse = window.scrollY > 0;
      setIsCollapsed(shouldCollapse);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full z-40 bg-secondary">
      <div
        className={`${
          isCollapsed ? "justify-between fixed right-0 left-0" : "justify-end"
        } hidden md:flex bg-secondary items-center mx-auto py-2 z-50 md:px-48 shadow`}
      >
        <div className={`${isCollapsed ? "block" : "hidden"}`}>
          <a className="font-bold uppercase text-white" href="/">
            Ami Robinson
          </a>
        </div>
        <ul
          className={`${
            isCollapsed ? "flex" : "hidden"
          } gap-5 items-center text-white`}
        >
          <li>
            <a href="A" className="hover:text-primary">
              About
            </a>
          </li>
          <li>
            <a href="A" className="hover:text-primary">
              Projects
            </a>
          </li>
          <li>
            <a href="A" className="hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
        <div className=" bg-secondary flex items-center justify-end gap-5 text-white">
          <FaGithub size={24} color="white" />
          <FaLinkedinIn size={24} color="white" />
        </div>
      </div>
      <div className="w-full bg-white py-5">
        <div className="w-full bg-white container mx-auto flex items-center justify-between text-gray-800">
          <a
            className="text-xl font-bold leading-relaxed inline-block py-2 uppercase"
            href="/"
          >
            Ami Robinson
          </a>

          {/* menu links */}
          <ul className="hidden md:flex gap-5 items-center">
            <li>
              <a href="A" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="A" className="hover:text-primary">
                Projects
              </a>
            </li>
            <li>
              <a href="A" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger button */}
          <button
            className="hamburger block md:hidden text-secondary focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="primary-navigation"
            aria-expanded={isMobileMenuOpen}
            onClick={handleClick}
          >
            <svg
              className="hamburger fill-secondary"
              viewBox="0 0 100 100"
              width="50"
              height="50"
              transform="scale(0.8)"
            >
              <rect
                className="line top"
                width="80"
                height="10"
                x="10"
                y="25"
                rx="5"
              ></rect>
              <rect
                className="line middle"
                width="80"
                height="10"
                x="10"
                y="45"
                rx="5"
              ></rect>
              <rect
                className="line bottom"
                width="80"
                height="10"
                x="10"
                y="65"
                rx="5"
              ></rect>
            </svg>
          </button>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={` 
        absolute md:hidden top-15 right-0 w-40 bg-gray-800 bg-opacity-90 transition-transform duration-300 ease-in-out transform-gpu p-4 rounded-md flex flex-col items-end ${
          isMobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
        }`}
      >
        <a href="a" className="block text-white hover:text-primary mb-2">
          About
        </a>
        <a href="a" className="block text-white hover:text-primary mb-2">
          Projects
        </a>
        <a href="A" className="block text-white hover:text-primary mb-2">
          Contact
        </a>
      </div>
    </nav>
  );
}
