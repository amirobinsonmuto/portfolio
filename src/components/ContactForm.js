import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ContactForm = () => {
  const ref = useIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.1,
  });
  return (
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
  );
};

export default ContactForm;
