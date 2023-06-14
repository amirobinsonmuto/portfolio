import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Contact from "../components/Contact";
import portfolio from "../assets/portfolio.jpg";
import brownSquare from "../assets/brownsquare.png";

const Hero = () => {
  const ref = useIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <header className="header bg-primary">
      <div className="container mx-auto items-center flex custom-height bg-primary gap-5">
        <div ref={ref} className="mx-4 md:pr-8 animation-hidden">
          <h1 className="z-50 font-semibold text-6xl text-white font-secondary tracking-widest uppercase">
            Ami Robinson{" "}
          </h1>
          <h2 className="text-fontPink text-8xl font-primary md:absolute -top-16 left-64">
            Front End Developer
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-white font-secondary">
            "I am a Front End Developer with a focus on React. I bring your
            vision to life by crafting elegant websites and applications that
            are both visually pleasing and functional.
          </p>
          <div className="mt-6 flex justify-start">
            <Contact
              className="btn-primary flex items-center ml-auto"
              showEnvelope={true}
            />
          </div>
        </div>
        <div className="hidden md:block relative">
          <img
            src={portfolio}
            alt=""
            className="absolute -top-5 z-40 rounded-lg"
          />
          <img
            src={brownSquare}
            alt=""
            className="relative top-5 rotate-10 opacity-50 z-30 rounded-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
