import React from "react";
import Image from "next/image";
import featured from "../../../../public/images/white-concrete-building-1838640.png";
import Link from "next/link";
import { RiArrowDropRightLine } from "react-icons/ri";

const BlogPosts = () => {
  return (
    <div className="max-w-[1200px] py-10 mx-auto p-6 grid grid-cols-1 md:grid-cols-3 items-start gap-6">
      {/* Featured Post */}
      <div className="mb-12 col-span-1  md:col-span-2">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Post</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="p-6">
            <Image src={featured} width={670} height={300} alt="" />
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span>By John Dee</span>
              <span className="mx-2">•</span>
              <span>Aug 23, 2023</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h3>
            <p className="text-gray-600 mb-4">
              Duis aute irure dolor in reprehenderit is vulputate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            {/* <button className="bg-[#FFD050] px-6 h-[40px] flex items-center justify-center">
              Read More
              <RiArrowDropRightLine />
            </button> */}
            <button className="bg-[#FFD050] px-6 h-[40px] flex items-center justify-center gap-1">
              <span>Read More</span>
              <RiArrowDropRightLine className="text-[30px]" />
            </button>
          </div>
        </div>
      </div>

      {/* All Posts */}
      <div className="col-span-1">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 ">All Posts</h2>
          <Link className="text-[16px] leading-[28px] text-[#592EA9]" href="">
            View All
          </Link>
        </div>
        <div className="space-y-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>By John Dee</span>
                <span className="mx-2">•</span>
                <span>Aug 23, 2021</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                8 Figure design systems that you can download for free today.
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
