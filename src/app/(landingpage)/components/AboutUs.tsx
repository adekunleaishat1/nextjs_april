// import React from "react";
// import { RiArrowDropRightLine } from "react-icons/ri";

// const AboutSection = () => {
//   return (
//     <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//         {/* About Us Card */}
//         <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm">
//           <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
//             ABOUT US
//           </h2>
//           <p className="text-lg font-medium text-gray-700 mb-3">
//             We are a community of content writers who share their learnings
//           </p>
//           <p className="text-gray-600 mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <button className="bg-[#FFD050] hover:bg-[#F4C030] transition-colors px-6 py-2 flex items-center gap-1 rounded">
//             <span>Read More</span>
//             <RiArrowDropRightLine size={25} />
//           </button>
//         </div>

//         {/* Our Mission Card */}
//         <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm">
//           <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
//             OUR MISSION
//           </h2>
//           <p className="text-lg font-medium text-gray-700 mb-3">
//             Creating valuable content for creatives all around the world
//           </p>
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import { RiArrowRightLine } from "react-icons/ri";

const AboutSection = () => {
  return (
    <div className="w-full py-10">
      <section className="max-w-[1200px] bg-[#F4F0F8] relative px-4 md:px-10 py-12 mx-auto">
        <div className="absolute top-[-10] justify-end right-0 w-full h-[10px] flex">
          <div className="bg-[#FFD050] w-[800px]" />
          <div className="bg-[#592EA9] w-[200px]" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2  gap-8 z-10">
          <div>
            <h4 className="uppercase text-sm tracking-widest text-gray-600 font-semibold mb-3">
              About Us
            </h4>
            <h2 className="text-2xl md:text-3xl font-bold text-[#232536] mb-4">
              We are a community of <br />
              content writers who share their <br />
              learnings
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button className="text-[#592EA9] mt-[15px] text-[16px] leading-[24px] font-semibold ">
              Read More &gt;
            </button>
          </div>

          <div>
            <h4 className="uppercase text-sm tracking-widest text-gray-600 font-semibold mb-3">
              Our Mission
            </h4>
            <h2 className="text-2xl md:text-3xl font-bold text-[#232536] mb-4">
              Creating valuable content for <br />
              creatives all around the world
            </h2>
            <p className="text-gray-600">
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

export default AboutSection;
