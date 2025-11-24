import styles from "./Testimonials.module.scss";
import TestimonialCard from "./TestimonialCard";
import SliderButton from "./SliderButton";
import testData from "@/seed/testData";

const renderCards = (container) => {
    const wrapper = container.querySelector(`.${styles.testCardWrapper}`);
    const groupWrapper = container.querySelector(`.${styles.testGroupWrapper}`);

    for (let data of testData) {
        groupWrapper.appendChild(TestimonialCard(data));
    }

    const buttonWrapper = container.querySelector(`.${styles.testSliderBtnWrapper}`);
    buttonWrapper.appendChild(SliderButton({ color: "black", deg: 180, direction: "left", wrapper }));
    buttonWrapper.appendChild(SliderButton({ color: "white", deg: 0, direction: "right", wrapper }));
}

const Testimonials = () => {
    const container = document.createElement('section');
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
    `
    renderCards(container);

    return container;
}

export default Testimonials;