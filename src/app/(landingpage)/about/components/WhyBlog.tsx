"use client";
import threepeople from "../../../../../public/images/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png";

import Image from "next/image";

export default function WhyBlog() {
  return (
    <section className="w-full px-4 py-16 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with purple circle */}
        <div className="relative">
          <Image
            src={threepeople}
            alt="People discussing with laptop"
            width={500}
            height={400}
            className="w-full rounded-md object-cover"
          />

          {/* Purple Circle */}
          <div className="absolute -bottom-4 left-8 w-10 h-10 bg-purple-600 rounded-full z-10 hidden md:block" />
        </div>

        {/* Right: Text Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why we started this Blog
          </h2>
          <p className="text-lg font-semibold text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
      </div>
    </section>
  );
}
