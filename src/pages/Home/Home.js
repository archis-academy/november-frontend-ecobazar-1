import Button from "@/components/Button/Button";
import Welcome from "@/components/Welcome/Welcome";
import HeroSection from "@/components/HeroSection/HeroSection";

const HomePage = () => {
  const container = document.createElement("div");
  container.appendChild(Welcome());
  container.appendChild(HeroSection())
  return container;
};

export default HomePage;
