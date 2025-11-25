import Arrow from "./Arrow";
import styles from "./Testimonials.module.scss";
import { storeData } from "@/services/store";
import testData from "@/seed/testData";

// This variable stores slider value.
let current = 0;
const gapValue = 24;
const itemPageCount = Math.ceil(testData.length / 3);

const handleClick = (e, wrapper) => {

    const direction = e.target.dataset.direction;
    const groupWrapper = wrapper.querySelector(`.${styles.testGroupWrapper}`);
    const groupWidth = groupWrapper.getBoundingClientRect().width;

    if (direction === "right") {
        if (current === (-1) * (groupWidth * (itemPageCount - 1) + (gapValue * (itemPageCount - 1)))) {
            current = 0;
            groupWrapper.style.transform = `translateX(${current}px)`;
            return;
        }
        current = current - (groupWidth + gapValue);
        groupWrapper.style.transform = `translateX(${current}px)`;
    }

    if (direction === "left") {
        if (current === 0) {
            current = (-1) * (groupWidth * (itemPageCount - 1) + (gapValue * (itemPageCount - 1)));
            groupWrapper.style.transform = `translateX(${current}px)`;
            return;
        }
        current = current + (groupWidth + gapValue);
        groupWrapper.style.transform = `translateX(${current}px)`;
    }
}

const SliderButton = ({ color, deg, direction, wrapper }) => {
    const button = document.createElement("button");
    button.classList.add(styles.testSliderBtn);
    button.innerHTML = `${Arrow(color, deg)}`;
    button.dataset.direction = direction;

    button.addEventListener('click', (e) => handleClick(e, wrapper));

    return button;
}

export default SliderButton;