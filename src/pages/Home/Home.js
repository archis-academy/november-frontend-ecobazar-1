import Button from "@/components/Button/Button";
import Welcome from "@/components/Welcome/Welcome";

const HomePage = () => {
  const container = document.createElement("div");
  container.appendChild(Welcome());
  container.appendChild(Button({content:"", className:"primary-btn"}));

  return container;
};

export default HomePage;
