import CategorySection from "@/components/CategoryCard/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsletterPopup from "@/components/NewsletterPopup/NewsletterPopup";
import ProductsSection from "@/components/Products/ProductsSection";
import Footer from "@/components/Footer/Footer";
import RenderFeaturesSection from "@/components/Features/Features";
import Testimonials from "@/components/Testimonials/Testimonials";
const HomePage = () => {
  const container = document.createElement("div");

  // Hero ve kategori bölümleri senkron çalışır
  container.appendChild(HeroSection());
  container.appendChild(RenderFeaturesSection());

  container.appendChild(NewsletterPopup());
  container.appendChild(CategorySection());

  container.appendChild(ProductsSection());
  container.appendChild(Testimonials());
  container.appendChild(Footer());
  return container;
};

export default HomePage;
