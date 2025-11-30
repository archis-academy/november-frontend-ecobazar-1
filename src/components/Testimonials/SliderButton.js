import Arrow from "./Arrow";
import styles from "./Testimonials.module.scss";
import stylesCard from "./TestimonialCard.module.scss";
import { storeData } from "@/services/store";

// This variable stores slider value.
let current = 0;

const handleClick = (e, wrapper) => {
  const direction = e.currentTarget.dataset.direction;

  const groupWrapper = wrapper.querySelector(`.${styles.testGroupWrapper}`);
  const gapValue = parseInt(getComputedStyle(groupWrapper).gap);
  const card = groupWrapper.querySelector(`.${stylesCard.card}`);

  let cardWidth = parseInt(card.style.minWidth);

  const { wrapperWidth } = storeData;
  const cardCount = Math.floor(wrapperWidth / 424);

  const step = cardCount * cardWidth + gapValue * cardCount;

  const itemPageCount = Math.ceil(storeData.comments.length / cardCount);
  const maxTranslate = -step * (itemPageCount - 1);

  // right ve left conditionlar için ayrı function'lar yaz.
  if (direction === "right") {
    if (current === maxTranslate) {
      current = 0;
      groupWrapper.style.transform = `translateX(${current}px)`;
      return;
    }
    current = current - step;
    groupWrapper.style.transform = `translateX(${current}px)`;
  }

  if (direction === "left") {
    if (current === 0) {
      current = maxTranslate;
      groupWrapper.style.transform = `translateX(${current}px)`;
      return;
    }
    current = current + step;
    groupWrapper.style.transform = `translateX(${current}px)`;
  }
};

const SliderButton = ({ color, deg, direction, wrapper }) => {
  const button = document.createElement("button");
  button.classList.add(styles.testSliderBtn);
  button.innerHTML = `${Arrow(color, deg)}`;
  button.dataset.direction = direction;

  button.addEventListener("click", (e) => handleClick(e, wrapper));

  return button;
};

export default SliderButton;
