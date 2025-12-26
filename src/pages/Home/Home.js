import CategorySection from "@/components/CategoryCard/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsletterPopup from "@/components/NewsletterPopup/NewsletterPopup";
import ProductsSection from "@/components/Products/ProductsSection";
import Footer from "@/components/Footer/Footer";
import RenderFeaturesSection from "@/components/Features/Features";
import Testimonials from "@/components/Testimonials/Testimonials";
import LatestNews from "@/components/LatestNews/LatestNewsCard";
import FeaturedProductSection from "@/components/FeaturedProducts/FeaturedProductSection";

const HomePage = () => {
  const container = document.createElement("div");

  // Hero ve kategori bölümleri senkron çalışır

  container.appendChild(HeroSection());
  container.appendChild(RenderFeaturesSection());
  container.appendChild(CategorySection());
  container.appendChild(ProductsSection());

  container.appendChild(LatestNews());
  container.appendChild(FeaturedProductSection());
  container.appendChild(Testimonials());
  container.appendChild(Footer());

  container.appendChild(NewsletterPopup());

  return container;
};

export default HomePage;
