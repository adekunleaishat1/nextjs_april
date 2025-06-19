import AuthorSection from "../components/AuthorSection";
import AboutUs from "./components/AboutUs";
import Contentview from "./components/Contentview";
import OurMission from "./components/OurMission";
import OurTeam from "./components/OurTeam";
import WhyBlog from "./components/WhyBlog";

const Aboutroot = () => {
  return (
    <div>
      <AboutUs />
      <Contentview />
      <OurMission />
      <OurTeam />
      <WhyBlog />
      <AuthorSection />
    </div>
  );
};

export default Aboutroot;
