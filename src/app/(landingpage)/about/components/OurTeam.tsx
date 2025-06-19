"use client";
import teamhands from "../../../../../public/images/ground-group-growth-hands-461049.png";

import Image from "next/image";

export default function OurTeam() {
  return (
    <section className="w-full px-4 py-16 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our team of creatives
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

        {/* Right: Image with yellow shape */}
        <div className="relative">
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-15 h-16 bg-yellow-400 rounded-tl-[30px] hidden md:block z-10" />

          <Image
            src={teamhands}
            alt="Team holding hands"
            width={500}
            height={400}
            className="w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
