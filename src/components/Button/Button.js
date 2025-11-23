import styles from "./Button.module.scss";

const Button = ({ content, variant="primary" ,image}) => {
  const button = document.createElement("button");
  button.classList.add(styles[variant]);
  button.innerHTML = content;
  return button;
};
export default Button;
