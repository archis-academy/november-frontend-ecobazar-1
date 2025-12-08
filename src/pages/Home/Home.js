import CategorySection from "@/components/CategoryCard/CategorySection";
import Testimonials from "@/components/Testimonials/Testimonials";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsletterPopup from "@/components/NewsletterPopup/NewsletterPopup";
import RenderFeaturesSection from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";

const HomePage = () => {
  const container = document.createElement("div");
  container.appendChild(HeroSection());
  container.appendChild(RenderFeaturesSection());

  container.appendChild(NewsletterPopup());
  container.appendChild(CategorySection());
  container.appendChild(Testimonials());

  container.appendChild(Footer());

  return container;
};

export default HomePage;
