import Button from "@/components/Button/Button";
import CategorySection from "@/components/CategoryCard/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";

const HomePage = () => {
  const container = document.createElement("div");

  // category section has been added to Homepage.
  container.appendChild(HeroSection());
  container.appendChild(CategorySection());
  return container;
};

export default HomePage;
