import React from "react";

const OurMission = () => {
  return (
    <div>
      <div className="w-full ">
        <section className="max-w-[1200px] bg-[#F4F0F8] relative px-4 md:px-10 py-12 mx-auto">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2  gap-8 z-10">
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
            <div>
              <h4 className="uppercase text-sm tracking-widest text-gray-600 font-semibold mb-3">
                Our Vision
              </h4>
              <h2 className="text-2xl md:text-3xl font-bold text-[#232536] mb-4">
                A platform that empowers individuals to improve
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>

              {/* <button className="text-[#592EA9] mt-[15px] text-[16px] leading-[24px] font-semibold ">
                Read More &gt;
              </button> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurMission;
