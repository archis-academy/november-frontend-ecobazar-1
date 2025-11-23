import styles from "./HeroSection.module.scss";
import heroLeftImg from "@/images/hero-images/hero-img-ecobazar-lef.jpg";
import heroRightTopImg from "@/images/hero-images/hero-img-rightTop.jpg";
import heroRightBottomImg from "@/images/hero-images/hero-img-right-bottom.jpg";
import rightArrow from "@/images/button-images/right-arrow-ecobazar.svg";
import Button from "../Button/Button";

const HeroSection = () => {
  const heroSection = document.createElement("section");

  heroSection.innerHTML = `
    <div class="${styles.parent}">
        
        <div class="${styles.left}">
            <img src="${heroLeftImg}" alt="Hero Left Image" />

            <div class="${styles.leftContent}">
                <h1> Fresh & Healthy Organic Food</h1>

                <div class="${styles.contentGroup}">
                    <div class="${styles.delivery}">
                        
                        <div class="${styles.sale}">
                            <h4> Sale up to</h4>
                            <span>30% OFF</span>
                        </div>

                        <div class="${styles.shipping}">
                            <p>Free shipping on all your order.</p>
                        </div>
                    </div> 

                    <button-left-placeholder></button-left-placeholder>
                </div>
            </div>
        </div>

        <div class="${styles.rightTop}">
            <img src="${heroRightTopImg}" alt="Hero Right Top Image" />
            
            <div class="${styles.rightTopContent}"> 
                <h4>SUMMER SALE</h4>
                <h1>75% OFF</h1>
                <p>Only Fruit & Vegetable</p>

                <button-right-top-placeholder></button-right-top-placeholder>
            </div>
        </div>

        <div class="${styles.rightBottom}">
            <img src="${heroRightBottomImg}" alt="Hero Right Bottom Image" />
            
            <div class="${styles.rightBottomContent}">
                <small>BEST DEAL</small>
                <h1>Special Products Deal of the Month</h1>

                <button-right-bottom-placeholder></button-right-bottom-placeholder>
            </div>
        </div>
    </div>
`;
  const delivery = heroSection.querySelector(`.${styles.leftContent}`);
  const sale = heroSection.querySelector(`.${styles.rightTopContent}`);

  const bestDeal = heroSection.querySelector(` .${styles.rightBottomContent}`);

  bestDeal.appendChild(
    Button({
      content: `Shop Now <img src="${rightArrow}" alt="Right Arrow" />`,
      variant: "outline",
    })
  );

  sale.appendChild(
    Button({
      content: `Shop Now <img src="${rightArrow}" alt="Right Arrow" />`,
      variant: "outline",
    })
  );

  delivery.appendChild(
    Button({
      content: `Shop Now  <img src="${rightArrow}" alt="Right Arrow" /> `,
      variant: "primary",
    })
  );
  return heroSection;
};

export default HeroSection;
