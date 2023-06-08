import React from "react";
import amiHeadShot from "../../assets/ami.jpeg";

const AboutUs = () => {
  return (
    <section className="pt-20 pb-60">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center mb-10">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="h2 text-gray-800">About</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600 text-justify">
              At Ruby Jam, we are passionate about helping small businesses and
              entrepreneurs build a strong online presence with custom web
              solutions that are tailored to their unique needs and goals.
            </p>
            <p className="text-lg leading-relaxed m-4 text-gray-600 text-justify">
              We have experience working with diverse clients, from non-profit
              to retail to e-commerce. Whether you need ongoing maintenance and
              support or have future web development needs, we're here to help
              you every step of the way.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold text-gray-800">
                  Ben Robinson
                </h5>
                <p className="mt-1 text-sm text-gray-600 uppercase font-semibold">
                  Full-stack Developer
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img src={amiHeadShot} alt="" className="w-64 rounded-full" />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold text-gray-800">
                  Ami Robinson
                </h5>
                <p className="mt-1 text-sm text-gray-600 uppercase font-semibold">
                  UI/UX Designer<br></br>Frontend Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
