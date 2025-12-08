import styles from "./Testimonials.module.scss";
import stylesCard from "./TestimonialCard.module.scss";
import TestimonialCard from "./TestimonialCard";
import SliderButton from "./SliderButton";
import { storeData } from "@/services/store";
import elementSelector from "./elementSelector";

const resizeCallback = (container) => {
  const { groupWrapper } = elementSelector(container);
  const groupWidth = groupWrapper.getBoundingClientRect().width;

  // wrapper' ın size' değiştikçe storeData içinde global olarak tutuluyor.
  storeData.testimonials.wrapperWidth = Math.floor(groupWidth);

  // Custom event, her size değiştiğinde event tetiklenmesi gerekiyor.
  const widthEvent = new CustomEvent("width-changed");
  document.dispatchEvent(widthEvent);
};

const resizeCards = (container) => {
  // eğer listener container'ı birden fazla eklenmesi önlendi!
  if (container._hasListener) return;
  container._hasListener = true;

  const { allCards } = elementSelector(container);

  const onChangedEvent = () => {
    const { wrapperWidth, gapValue, cardDefaultWidth } = storeData.testimonials;
    const cardCount = Math.floor(wrapperWidth / cardDefaultWidth);
    const newWidth = Math.abs(
      Math.floor(wrapperWidth - cardCount * cardDefaultWidth - gapValue * 2)
    );

    allCards.forEach((element) => {
      element.style.minWidth = `${cardDefaultWidth + newWidth / 2}px`;
    });
  };

  document.addEventListener("width-changed", onChangedEvent);
};

const renderCards = (container) => {
  const { comments } = storeData;
  const { groupWrapper, buttonWrapper } = elementSelector(container);

  for (let comment of comments) {
    groupWrapper.appendChild(TestimonialCard(comment));
  }

  buttonWrapper.appendChild(
    SliderButton({ color: "black", deg: 180, direction: "left", container })
  );
  buttonWrapper.appendChild(
    SliderButton({ color: "white", deg: 0, direction: "right", container })
  );

  //  ResizeObserver, tarayıcı tarafından sağlanan bir JS Class' ıdır.
  //  Class bir callback function alır. Event oluştuğunda çalışacak fonksiyondur.
  const resizeObserver = new ResizeObserver(() => resizeCallback(container));
  // Observe methodu ile bu class'a dinlenmesi istenen DOM elementi verilir.
  resizeObserver.observe(container);
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
  elementSelector(container);

  return container;
};

export default Testimonials;
