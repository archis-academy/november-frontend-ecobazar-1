import styles from "./Testimonials.module.scss";
import stylesCard from "./TestimonialCard.module.scss";

const elementSelector = (container) => {
  const wrapper = container.querySelector(`.${styles.testCardWrapper}`);
  const groupWrapper = container.querySelector(`.${styles.testGroupWrapper}`);
  const allCards = container.querySelectorAll(`.${stylesCard.card}`);
  const buttonWrapper = container.querySelector(`.${styles.testSliderBtnWrapper}`);
  const card = groupWrapper.querySelector(`.${stylesCard.card}`);

  return { card, groupWrapper, allCards, wrapper, buttonWrapper };
};

export default elementSelector;
