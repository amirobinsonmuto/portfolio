import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Footer = () => {
  const ref = useIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.1,
  });
  return (
    <footer className="relative  bg-gray-800 pt-8 pb-6 ">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
            className="text-gray-800 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container lg:w-6/12 mx-auto mt-20">
        <div
          ref={ref}
          className="animation-hidden flex justify-center bg-secondary shadow-xl rounded-lg -mt-64 py-10 px-12 relative z-10"
          id="contact-form"
        >
          <form className="w-full text-center lg:w-8/12">
            <h3 className="text-4xl text-white font-secondary uppercase tracking-widest">
              Contact Me
            </h3>
            <div className="mb-4 mt-8">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-md px-3 py-2 "
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-md px-3 py-2"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full rounded-md px-3 py-2"
                name="message"
                id="message"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="btn-secondary  mx-auto" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 text-white font-secondary">
          <div className="text-center px-4">
            <h3 className="text-6xl mb-2 font-primary">Ami Robinson</h3>
            <p>Nanaimo, BC, Canada</p>
            <p>info@rubyjam.com</p>
            <p>250-888-8888</p>
          </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm font-semibold py-1">
              Copyright © {new Date().getFullYear()} Ami Robinson
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
