import AboutSection from "./components/AboutUs";
import BlogPosts from "./components/Blogposts";
import CategorySection from "./components/CategorySection";
import Startup from "./components/Startup";
import WhyWeStartedSection from "./components/Whygetstarted";

const Homepage = () => {
  return (
    <>
      <Startup />
      <BlogPosts />
      <AboutSection />
      <CategorySection />
      <WhyWeStartedSection />
    </>
  );
};

export default Homepage;
