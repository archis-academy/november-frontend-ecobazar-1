import styles from "./Testimonials.module.scss";
import TestimonialCard from "./TestimonialCard";
import SliderButton from "./SliderButton";


const testData = {
    fullName: "Robert Fox",
    role: "Customer",
    avatar: "/images/avatar-1.jpg",
    testimonial: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    rate: 5,
}

const renderCards = (container) => {
    const wrapper = container.querySelector(`.${styles.testCardWrapper}`);
    wrapper.appendChild(TestimonialCard(testData));

    const buttonWrapper = container.querySelector(`.${styles.testSliderBtnWrapper}`);
    buttonWrapper.appendChild(SliderButton({ color: "black", deg: 180 }));
    buttonWrapper.appendChild(SliderButton({ color: "white", deg: 0 }));
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
        <div class=${styles.testCardWrapper}></div>
    </div>
    `
    renderCards(container);

    return container;
}

export default Testimonials;