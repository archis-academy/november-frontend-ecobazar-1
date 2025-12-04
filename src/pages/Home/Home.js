import Button from "@/components/Button/Button";
import CategorySection from "@/components/CategoryCard/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProductsSection from "@/components/Products/ProductsSection";

const HomePage = async () => {
  const container = document.createElement("div");

  // Hero ve kategori bölümleri senkron çalışır
  container.appendChild(HeroSection());
  container.appendChild(CategorySection());

  // ProductsSection async olduğu için await gerekir
  container.appendChild(await ProductsSection());

  return container;
};

export default HomePage;
