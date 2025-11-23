import Button from "../Button/Button";
import styles from "./Welcome.module.scss";
import HeroSection from "../HeroSection/HeroSection";

// prettier-ignore
const packages = [
    "sass",
    "page",
  ];

const preConfigs = [
  "Path aliases",
  "Routing with pages",
  "Default Sass Files",
  "Base project structure",
];

const Welcome = () => {
  const section = document.createElement("section");

  section.innerHTML = `
    <header class=${styles.welcomeHeader}>
      <img src="/archis-logo.svg" alt="Archis Logo" />
      <h1>Welcome to Archis</h1>

      <div class=${styles.welcomeContent}>
        <h3>Installed Packages</h3>
        <ul class=${styles.itemList}>${packages
    .map((pkg) => `<li>${pkg}</li>`)
    .join("")}</ul>

        <br />

        <h3>Pre-Configurations</h3>
        <ul class=${styles.itemList}>${preConfigs
    .map((config) => `<li>${config}</li>`)
    .join("")}</ul>
      </div>

      <em>Copyright &copy; ${new Date().getFullYear()}</em>
    </header>
  `;
  // section.appendChild(Button({ content: "Get Started", variant: "outline" }));
  // section.appendChild(HeroSection());
  return section;
};

export default Welcome;
