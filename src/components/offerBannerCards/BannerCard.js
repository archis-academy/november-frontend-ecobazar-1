import Button from "../Button/Button";
import style from "./BannerCard.module.scss";
import rightArrow from "@/images/button-images/right-arrow-ecobazar.svg";

const BannerCard = () => {
  const offerBannerCardsSection = document.createElement("section");

  offerBannerCardsSection.innerHTML = `
    <div class="${style.container}">
      
      <div class="${style.box} ${style.blueBackground}">
        <h5>Best Deals</h5>
        <h1>Sale of the Month</h1>
        
        <div class="${style.countdownContainer}">
          <div class="${style.timerBox}">
            <div class="${style.timeValue}">00</div>
            <div class="${style.timeLabel}">DAYS</div>
          </div>
          <div class="${style.separator}">:</div>

          <div class="${style.timerBox}">
            <div class="${style.timeValue}">02</div>
            <div class="${style.timeLabel}">HOURS</div>
          </div>

          <div class="${style.separator}">:</div>

          <div class="${style.timerBox}">
            <div class="${style.timeValue}">18</div>
            <div class="${style.timeLabel}">MINS</div>
          </div>

          <div class="${style.separator}">:</div>

          <div class="${style.timerBox}">
            <div class="${style.timeValue}">46</div>
            <div class="${style.timeLabel}">SECS</div>
          </div>
        </div>
        
        <div class="${style.button}"></div>
      </div>
      
      <div class="${style.box} ${style.blackBackground}">
        <h5>85% FAT FREE</h5>
        <h1>Low-Fat Meat</h1>
        <p>Started at <span>$79.99</span></p>
        <div class="${style.button}"></div>
      </div>
      
      <div class="${style.box} ${style.yellowBackground}">
        <h5>SUMMER SALE</h5>
        <h1>100% Fresh Fruit</h1>
        <p>Up to <span>64% OFF</span> </p>
        <div class="${style.button}"></div>
      </div>
    </div>
  `;

  // Tüm button container'ları seç
  const buttonContainers = offerBannerCardsSection.querySelectorAll(
    `.${style.button}`
  );

  // Her container'a ayrı bir Button oluşturup ekle
  buttonContainers.forEach((container) => {
    const btn = Button({
      content: `Shop Now  <img src="${rightArrow}" alt="Right Arrow" /> `,
      variant: "primary",
    });

    container.appendChild(btn);
  });

  return offerBannerCardsSection;
};

export default BannerCard;
