import styles from "./Button.module.scss";

const Button = ({ content, variant="primary" }) => {
  const button = document.createElement("button");
  button.classList.add(styles[variant]);
  button.textContent = content;
  return button;
};
export default Button;
