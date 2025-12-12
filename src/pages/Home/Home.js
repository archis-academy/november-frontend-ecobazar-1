import CategorySection from "@/components/CategoryCard/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProductsSection from "@/components/Products/ProductsSection";

const HomePage = () => {
  const container = document.createElement("div");

  // Hero ve kategori bölümleri senkron çalışır
  container.appendChild(HeroSection());
  container.appendChild(CategorySection());

  container.appendChild(ProductsSection());

  return container;
};

export default HomePage;
