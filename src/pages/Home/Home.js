import Button from "@/components/Button/Button";
import CategorySection from "@/components/CategoryCard/CategorySection";
import Testimonials from "@/components/Testimonials/Testimonials";
import HeroSection from "@/components/HeroSection/HeroSection";

const HomePage = () => {
  const container = document.createElement("div");

  // category section has been added to Homepage.
  container.appendChild(HeroSection());
  container.appendChild(CategorySection());
  container.appendChild(Testimonials());

  return container;
};

export default HomePage;
