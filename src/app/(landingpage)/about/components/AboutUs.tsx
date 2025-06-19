import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section className="bg-white  py-6 lg:py-0 h-auto  lg:h-[300px] ">
        <div className="max-w-[1133px] px-4 md:px-0  lg:absolute left-[80px] bottom-[150px] z-10 mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-12 ">
          <div className="md:w-1/2 space-y-6 px-0 md:px-8 py-6  md:py-12 bg-white ">
            <p className="uppercase text-sm text-gray-500 tracking-widest">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl  lg:text-5xl font-bold text-gray-900 leading-tight">
              We are a team of content writers who share their learnings
            </h2>
          </div>
          <div className="md:w-1/2 pt-0 md:pt-5">
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
