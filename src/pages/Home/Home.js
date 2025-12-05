import CategorySection from "@/components/CategoryCard/CategorySection";
import Testimonials from "@/components/Testimonials/Testimonials";
import HeroSection from "@/components/HeroSection/HeroSection";
import RenderFeaturesSection from "@/components/Features/Features";

const HomePage = () => {
  const container = document.createElement("div");
  container.appendChild(HeroSection());
  container.appendChild(RenderFeaturesSection());

  // category section has been added to Homepage.
  container.appendChild(CategorySection());

  // category section has been added to Homepage.
  container.appendChild(Testimonials());

  return container;
};

export default HomePage;
