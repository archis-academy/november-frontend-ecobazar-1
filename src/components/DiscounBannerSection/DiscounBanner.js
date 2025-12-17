import styles from "./DiscounBanner.module.scss";
import bgImg from "../../images/discount-banner/bg-img.jpg";
import Button from "../Button/Button";
import rightArrow from "@/images/button-images/right-arrow-ecobazar.svg";

const DiscounBanner = () => {
  const section = document.createElement("section");

  section.innerHTML = `
    <div class="${styles.container}">
      <img class="${styles.bg}" src="${bgImg}" alt="Discount Banner" />

      <div class="${styles.box}">
        <h4>SUMMER SALE</h4>
        <h1><span>37%</span> OFF</h1>
        <p>
          Free on all your order, Free Shipping and 30 days money-back guarantee
        </p>
      </div>
    </div>
  `;

  const box = section.querySelector(`.${styles.box}`);

  box.appendChild(
    Button({
      content: `Shop Now <img class=${styles.arrow} src="${rightArrow}" alt="Right Arrow" />`,
      variant: "secondary",
    })
  );

  return section;
};

export default DiscounBanner;
