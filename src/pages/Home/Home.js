import CategoryCard from "@/components/CategoryCard/CategoryCard";

const data = {
  imageSrc: "/images/fruits.png",
  name: "Fresh Fruit",
};

const HomePage = () => {
  const container = document.createElement("div");
  container.appendChild(CategoryCard(data));

  return container;
};

export default HomePage;
