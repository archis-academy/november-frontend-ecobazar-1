import CategorySection from "@/components/CategoryCard/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import LogoSection from "@/components/Logo/LogoSection";

const HomePage = () => {
  const container = document.createElement("div");

  // category section has been added to Homepage.
  container.appendChild(HeroSection());
  container.appendChild(CategorySection());
  container.appendChild(LogoSection());
  return container;
};

export default HomePage;
