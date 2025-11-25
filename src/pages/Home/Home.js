import CategorySection from "@/components/CategoryCard/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import Header from "@/components/Header/Header";

const HomePage = () => {
  const container = document.createElement("div");

  // category section has been added to Homepage.
  container.appendChild(HeroSection());
  container.appendChild(CategorySection());
  container.appendChild(Header());
  return container;
};

export default HomePage;
