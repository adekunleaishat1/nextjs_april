import Image from "next/image";
import People from "../../../../public/images/close-up-photography-of-man-wearing-sunglasses-1212984.png";
import React from "react";

const WhyWeStartedSection = () => {
  return (
    <section className="px-4 py-12 md:py-20 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10  ">
        {/* Image Section */}
        {/* <div className="w-[1000px] md:w-1/2  relative"> */}
        <Image
          src={People} // replace with your actual image path
          alt="People sitting together"
          width={900}
          height={700}
          className="rounded-lg  object-cover relative"
        />
        {/* </div> */}

        {/* Text Section */}
        <div className="bg-white py-10  px-8 max-w-[700px] md:w-1/2 absolute border bottom-[1] right-[170px] ">
          <p className="text-sm text-gray-600 tracking-widest uppercase font-medium mb-2">
            Why we started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            It started out as a simple idea and evolved into our passion
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <button className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded hover:bg-yellow-500 transition">
            Discover our story &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyWeStartedSection;
