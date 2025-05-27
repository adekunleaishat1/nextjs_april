"use client";
import AboutSection from "./components/AboutUs";
import AuthorSection from "./components/AuthorSection";
import BlogPosts from "./components/Blogposts";
import CategorySection from "./components/CategorySection";
import Startup from "./components/Startup";
import TeamStory from "./components/TeamStory";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyWeStartedSection from "./components/Whygetstarted";

const Homepage = () => {
  return (
    <>
      <Startup />
      <BlogPosts />
      <AboutSection />
      <CategorySection />
      <WhyWeStartedSection />
      <AuthorSection />
      <TestimonialsSection />
      <TeamStory />
    </>
  );
};

export default Homepage;
