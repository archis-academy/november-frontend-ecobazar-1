import Button from "@/components/Button/Button";
import CategorySection from "@/components/CategoryCard/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import { ProductCard } from "@/components/Pop/Products/pop/ProductCard";

const HomePage = () => {
  const container = document.createElement("div");

  // category section has been added to Homepage.
  container.appendChild(HeroSection());
  container.appendChild(CategorySection());
  container.appendChild(ProductCard());

  return container;
};

export default HomePage;
