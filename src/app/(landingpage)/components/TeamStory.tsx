"use client";
import React from "react";
import { useRouter } from "next/navigation";

const TeamStory = () => {
  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto text-center mb-10 py-16 flex justify-center items-center">
      <div className="max-w-[414px] px-4 md:px-0">
        <h1 className="text-[#232536] text-[36px] leading-[48px] mb-6 font-semibold">
          Join our team to be a part of our story
        </h1>
        <p className="text-[16px] leading-[28px] text-[#6D6E76] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <button
          onClick={() => {
            router.push("/signup");
          }}
          className="bg-[#FFD050] text-[16px] leading-[24px] font-semibold px-6 h-[40px] flex items-center justify-center mx-auto gap-1"
        >
          <span>Join Now</span>
        </button>
      </div>
    </div>
  );
};

export default TeamStory;
