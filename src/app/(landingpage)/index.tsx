"use client";
import AboutSection from "./components/AboutUs";
import AuthorSection from "./components/AuthorSection";
import BlogPosts from "./components/Blogposts";
import CategorySection from "../../components/categorysection";
import Startup from "./components/Startup";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyWeStartedSection from "./components/Whygetstarted";
import Featuredin from "./components/Featuredin";

const Homepage = () => {
  return (
    <>
      <Startup />
      <BlogPosts />
      <AboutSection />
      <CategorySection />
      <WhyWeStartedSection />
      <AuthorSection />
      <Featuredin />
      <TestimonialsSection />
    </>
  );
};

export default Homepage;
