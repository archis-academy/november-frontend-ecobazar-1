import CategorySection from "@/components/CategoryCard/CategorySection";
import Testimonials from "@/components/Testimonials/Testimonials";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsletterPopup from "@/components/NewsletterPopup/NewsletterPopup";
import RenderFeaturesSection from "@/components/Features/Features";

const HomePage = () => {
  const container = document.createElement("div");
  container.appendChild(HeroSection());
  container.appendChild(RenderFeaturesSection());

  container.appendChild(NewsletterPopup());
  container.appendChild(CategorySection());
  container.appendChild(Testimonials());

  return container;
};

export default HomePage;
