import React from "react";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Contact from "./Contact";

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

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const { top } = el.getBoundingClientRect();
      window.scrollTo({
        top: window.pageYOffset + top - 100,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
    <nav className="w-full z-40 bg-secondary font-secondary tracking-widest overflow-x-hidden">
      {/* Brown navBar */}
      <div
        className={`${
          isCollapsed ? "justify-between fixed right-0 left-0" : "justify-end"
        } hidden md:flex bg-secondary items-center mx-auto py-2 z-50 md:px-48 shadow`}
        aria-hidden={!isCollapsed}
      >
        <div className={`${isCollapsed ? "block" : "hidden"}`}>
          <button
            onClick={scrollToTop}
            className="font-primary text-4xl text-white"
            name="Scroll to the top"
          >
            Ami Robinson
          </button>
        </div>
        <ul
          className={`${
            isCollapsed ? "flex" : "hidden"
          } gap-5 items-center text-white`}
        >
          <li>
            <button
              onClick={() => {
                scrollToSection("about");
              }}
              className="hover:text-primary"
            >
              ABOUT
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("projects");
              }}
              className="hover:text-primary"
            >
              PROJECTS
            </button>
          </li>
          <li>
            <Contact
              className="font-secondary leading-widest uppercase hover:text-primary"
              showEnvelope={false}
            />
          </li>
        </ul>
        <div className=" bg-secondary flex items-center justify-end gap-5 text-white">
          <a href="https://github.com/amirobinsonmuto" target="blank">
            <FaGithub size={24} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/ami-robinson/" target="blank">
            <FaLinkedinIn size={24} color="white" />
          </a>
        </div>
      </div>

      {/* White navBar */}
      <div className="w-full bg-white py-5" aria-hidden={isCollapsed}>
        <div className="w-full bg-white container mx-auto ps-5 md:ps-0 flex items-center justify-between text-gray-800">
          <p className="font-primary text-6xl inline-block py-2" href="/">
            Ami Robinson
          </p>

          <ul className="hidden md:flex gap-5 items-center">
            <li>
              <button
                onClick={() => {
                  scrollToSection("about");
                }}
                className="hover:text-primary"
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("projects");
                }}
                className="hover:text-primary"
              >
                PROJECTS
              </button>
            </li>
            <li>
              <Contact
                className="font-secondary leading-widest uppercase hover:text-primary"
                showEnvelope={false}
              />
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
      <ul
        className={` 
        text-white font-secondary leading-widest absolute md:hidden top-15 right-0 w-40 bg-gray-800 transition-transform duration-300 ease-in-out transform-gpu p-4 rounded-md flex flex-col items-end ${
          isMobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
        }`}
        aria-hidden={!isMobileMenuOpen}
        aria-expanded={isMobileMenuOpen}
      >
        <li>
          <button
            onClick={() => {
              scrollToSection("about");
            }}
            className="hover:text-secondary"
          >
            ABOUT
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection("projects");
            }}
            className="hover:text-secondary"
          >
            PROJECTS
          </button>
        </li>
        <li>
          <Contact
            className="font-secondary leading-widest uppercase hover:text-secondary"
            showEnvelope={false}
          />
        </li>
      </ul>
    </nav>
  );
}
