import styles from "./CategoryCard.module.scss";

/***

const data = {
    imageSrc: "/images/category-image-1",
    name: "Fresh Fruit",
}

***/

function handleClickEvent(e) {
    // get the selected card from document
    const selected = document.querySelector(`.${styles.featured}`);

    // check element exist
    if (selected !== null) {
        selected.classList.remove(styles.featured);
        e.target.classList.add(styles.featured);
    }

    // first adding featured class to classList
    e.target.classList.add(styles.featured)

}


const CategoryCard = (data) => {
    const card = document.createElement('div');
    card.classList.add(styles.card);

    card.innerHTML = `
    <div class="${styles.cardHeader}">
        <img src=${data.imageSrc} alt=${data.name}>
    </div>
    <div class="${styles.cardBody}">
        <span class="${styles.cardName}">${data.name}</span>
    </div>
    `

    card.addEventListener("click", (e) => handleClickEvent(e))

    return card;
}

export default CategoryCard;