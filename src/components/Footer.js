import ContactForm from "./ContactForm";

const Footer = () => {
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
      <ContactForm />

      <div className="container mx-auto px-4 mt-10 text-white font-secondary">
        <div className="text-center px-4">
          <h3 className="text-6xl mb-2 font-primary">Ami Robinson</h3>
          <p>Nanaimo, BC, Canada</p>
          <a
            className="underline hover:text-secondary"
            href="mailto:amimuto1002@gmail.com"
          >
            amimuto1002@gmail.com
          </a>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm py-1">
              Copyright © {new Date().getFullYear()} Ami Robinson
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
