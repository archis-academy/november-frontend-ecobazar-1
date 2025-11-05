import Welcome from "@/components/Welcome/Welcome";

const HomePage = () => {
  const container = document.createElement("div");
  container.appendChild(Welcome());

  return container;
};

export default HomePage;
