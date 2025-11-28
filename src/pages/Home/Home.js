import CategorySection from "@/components/CategoryCard/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import LatestNews from "@/components/LatestNews/LatestNewsCard";

const HomePage = () => {
  const container = document.createElement("div");

  // category section has been added to Homepage.
  // container.appendChild(HeroSection());
  // container.appendChild(CategorySection());
  container.appendChild(LatestNews())
  return container;
};

export default HomePage;
