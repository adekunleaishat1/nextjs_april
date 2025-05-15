"use client";
import Allpost from "./Allpost";
import FeaturedPost from "./featuredpost";

const Blogroot = () => {
  return (
    <div className="min-h-screen  bg-white">
      <FeaturedPost />
      <Allpost />
    </div>
  );
};

export default Blogroot;
