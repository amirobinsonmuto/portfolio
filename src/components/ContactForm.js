import React from "react";
import { useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import db from "../firebase";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const ref = useIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert(
          "Thank you for your message! I will get back to you as soon as possible."
        );
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container lg:w-6/12 mx-auto mt-20">
      <div
        ref={ref}
        className="animation-hidden flex justify-center bg-secondary shadow-xl rounded-lg -mt-64 py-10 px-12 relative z-10"
        id="contact-form"
      >
        <form className="w-full text-center lg:w-8/12" onSubmit={handleSubmit}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className={`btn-secondary  mx-auto ${
              loader === true ? "opacity-20" : ""
            } `}
            type="submit"
            disabled={loader}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
