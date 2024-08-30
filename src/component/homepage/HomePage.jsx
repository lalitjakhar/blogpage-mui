import Allcategoriesbuttons from "./Allcategoriesbuttons";
import BlogPageCard from "./BlogPageCard";
import BlogPageCard2 from "./BlogPageCard2";
import HeroSection from "./HeroSection";
import LatestPage from "./LatestPage";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Allcategoriesbuttons />
      <BlogPageCard />
      <BlogPageCard2 />
      <LatestPage />
    </>
  );
};
export default Homepage;
