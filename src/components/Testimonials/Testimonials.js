import styles from "./Testimonials.module.scss";
import stylesCard from "./TestimonialCard.module.scss";
import TestimonialCard from "./TestimonialCard";
import SliderButton from "./SliderButton";
import { storeData } from "@/services/store";

const resizeCallback = (wrapper) => {
  const groupWrapper = wrapper.querySelector(`.${styles.testGroupWrapper}`);
  const groupWidth = groupWrapper.getBoundingClientRect().width;
  storeData.wrapperWidth = Math.floor(groupWidth);

  const widthEvent = new CustomEvent("width-changed");
  document.dispatchEvent(widthEvent);
};

const resizeCards = (container) => {
  const allCards = container.querySelectorAll(`.${stylesCard.card}`);
  const gapValue = 24;

  document.addEventListener("width-changed", () => {
    const { wrapperWidth } = storeData;
    const cardCount = Math.floor(wrapperWidth / 424);
    const newWidth = Math.abs(
      Math.floor(wrapperWidth - cardCount * 424 - gapValue * 2)
    );

    allCards.forEach((element) => {
      element.style.minWidth = `${424 + newWidth / 2}px`;
    });
  });
};

const renderCards = (container) => {
  const { comments, groupWidth } = storeData;
  const wrapper = container.querySelector(`.${styles.testCardWrapper}`);
  const groupWrapper = container.querySelector(`.${styles.testGroupWrapper}`);

  for (let comment of comments) {
    groupWrapper.appendChild(TestimonialCard(comment));
  }

  const buttonWrapper = container.querySelector(`.${styles.testSliderBtnWrapper}`);
  buttonWrapper.appendChild(
    SliderButton({ color: "black", deg: 180, direction: "left", wrapper })
  );
  buttonWrapper.appendChild(
    SliderButton({ color: "white", deg: 0, direction: "right", wrapper })
  );

  //   ResizeObserver
  const resizeObserver = new ResizeObserver(() => resizeCallback(wrapper));
  resizeObserver.observe(wrapper);
};

const Testimonials = () => {
  const container = document.createElement("section");
  container.classList.add(styles.test);

  container.innerHTML = `
    <div class=${styles.testContent}>
        <div class=${styles.testHeaderWrapper}>
            <h1 class=${styles.testTitle}>Client Testimonials</h1>
            <div class=${styles.testSliderBtnWrapper}></div>
        </div>
        <div class=${styles.testCardWrapper}>
            <div class=${styles.testGroupWrapper}></div>
        </div>
    </div>
    `;

  renderCards(container);
  resizeCards(container);

  return container;
};

export default Testimonials;
