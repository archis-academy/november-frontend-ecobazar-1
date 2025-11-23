import Arrow from "./Arrow";
import styles from "./Testimonials.module.scss";

const SliderButton = ({color, deg})=> {
    const button = document.createElement("button");
    button.classList.add(styles.testSliderBtn);
    button.innerHTML = `${Arrow(color, deg)}`;
    return button;
}

export default SliderButton;