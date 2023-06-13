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
          <h2 className="font-semibold text-6xl text-white">
            Ami Robinson
            <br />
            Web Developer
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-white">
            I specialize in building and maintaining websites and full-stack
            applications in React. Contact me to learn more about how we can
            help you.
          </p>
          <div className="mt-6 flex justify-start">
            <Contact
              className="btn-primary flex items-center ml-auto"
              showEnvelope={true}
            />
          </div>
        </div>
        <div className="hidden md:block relative">
          <img src={portfolio} alt="" className="absolute -top-5 z-40" />
          <img
            src={brownSquare}
            alt=""
            className="relative top-5 rotate-10 opacity-50 z-30"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
