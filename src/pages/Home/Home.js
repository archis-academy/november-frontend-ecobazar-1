import CategorySection from "@/components/CategoryCard/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import BannerCard from "@/components/offerBannerCards/BannerCard";

const HomePage = () => {
  const container = document.createElement("div");

  // category section has been added to Homepage.
  container.appendChild(HeroSection());
  // container.appendChild(CategorySection());
  container.appendChild(BannerCard());
  return container;
};

export default HomePage;
