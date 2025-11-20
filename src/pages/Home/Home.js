import CategorySection from "@/components/CategoryCard/CategorySection";

const HomePage = () => {
  const container = document.createElement("div");

  // category section has been added to Homepage.
  container.appendChild(CategorySection());

  return container;
};

export default HomePage;
