import RenderFeaturesSection from "@/components/Features/Features";

const HomePage = () => {
  const container = document.createElement("div");
  container.appendChild(RenderFeaturesSection());

  return container;
};

export default HomePage;
