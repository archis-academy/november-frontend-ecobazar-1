import RenderFeaturesSection from "@/components/Features/Features";

import CategorySection from "@/components/CategoryCard/CategorySection";

const HomePage = () => {
  const container = document.createElement("div");
  container.appendChild(RenderFeaturesSection());

  // category section has been added to Homepage.
  container.appendChild(CategorySection());

  return container;
};

export default HomePage;
