import React from "react";
import Image from "next/image";
import People from "../../../../../public/images/close-up-photography-of-man-wearing-sunglasses-1212984.png";

const Contentview = () => {
  return (
    <div className="w-full ">
      <div className="max-w-[1200px] mx-auto z-[-1]  relative">
        <Image
          src={People}
          alt="Team"
          className="h-[500px] w-full object-fill"
        />

        {/* Stats Section */}
        <div className="md:absolute bottom-0 left-[60px]">
          <div className=" bg-yellow-400 px-6 py-5 shadow-lg w-[90%] max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-5xl font-bold text-gray-900">12+</p>
              <p className="text-sm text-gray-800 mt-1">Blogs Published</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gray-900">18K+</p>
              <p className="text-sm text-gray-800 mt-1">Views on Finsweet</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gray-900">30K+</p>
              <p className="text-sm text-gray-800 mt-1">Total active Users</p>
            </div>
          </div>
          <div className="max-w-[860px] h-[23] flex ">
            <div className="w-[310px] bg-[#592EA9]"></div>
            <div className="w-[550px] bg-yellow-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contentview;
