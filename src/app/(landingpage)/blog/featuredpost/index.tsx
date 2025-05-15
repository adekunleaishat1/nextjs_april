import React from 'react';
import Image from 'next/image';
import featuredimage from "../../../../../public/images/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.png"

const FeaturedPost = () => {
  return (
    <div className="bg-[#f6f3ff] p-8 md:p-16 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="md:w-1/2">
        <p className="text-sm text-gray-500 uppercase mb-2">Featured Post</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-snug">
          Step-by-step guide to choosing great font pairs
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          By <span className="text-indigo-600 font-medium cursor-pointer">John Doe</span> | May 23, 2022
        </p>
        <p className="text-gray-600 mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded">
          Read More &gt;
        </button>
      </div>
      <div className="md:w-1/2">
       <Image src={featuredimage}   alt="Featured"/>
      </div>
    </div>
  );
};

export default FeaturedPost;
