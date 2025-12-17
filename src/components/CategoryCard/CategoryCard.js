import styles from "./CategoryCard.module.scss";

function handleClickEvent(e) {
  // get the selected card from document
  const selected = document.querySelector(`.${styles.featured}`);

  // check element exist
  selected !== null && selected.classList.remove(styles.featured);

  // first adding featured class to classList
  e.target.classList.add(styles.featured);
}

const CategoryCard = ({ name, imageSrc }) => {
  const card = document.createElement("div");
  card.classList.add(styles.card);

  card.innerHTML = `
    <div class="${styles.cardHeader}">
        <img src=${imageSrc} alt=${name}>
    </div>
    <div class="${styles.cardBody}">
        <span class="${styles.cardName}">${name}</span>
    </div>
    `;

  card.addEventListener("click", (e) => handleClickEvent(e));

  return card;
};

export default CategoryCard;
