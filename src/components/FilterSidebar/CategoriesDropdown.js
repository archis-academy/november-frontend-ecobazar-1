import styles from "./FilterSidebar.module.scss";
import handleDropdownClick from "./handle";

const allCategories = [
    { content: "Fresh Fruit", count: 134 },
    { content: "Vegetables", count: 150 },
    { content: "Cooking", count: 54 },
    { content: "Snacks", count: 47 },
    { content: "Beverages", count: 43 },
    { content: "Beauty & Health", count: 38 },
    { content: "Bread & Bakery", count: 15 },
]

const categoriesItem = ({ content, count }) => (
    `<li class=${styles.dropdownListItem}>   
        <input class=${styles.dropdownListItemRadio} type="radio" id=${content} name="categories"/>
        <label class=${styles.dropdownListItemLabel} for=${content}>${content}</label>
        <span class=${styles.dropdownListItemCount}>(${count})</span>
    </li>`
)

const CategoriesDropdown = () => {

    const dropdown = document.createElement('div');
    dropdown.classList.add(styles.dropdown);

    dropdown.innerHTML = `
        <div class=${styles.dropdownHeader}>
            <h2 class= ${styles.dropdownHeaderTitle}>All Categories</h2>
            <img class=${styles.dropdownHeaderArrow} src="/icons/dropdown-arrow.png" alt="arrow-icon" />
        </div>
        <ul class=${styles.dropdownList}>
            ${allCategories.map((listItem) => categoriesItem(listItem)).join("")}
        </ul>
    `;

    const dropdownTrigger = dropdown.querySelector(`.${styles.dropdownHeader}`);
    // const listWrapper = dropdown.querySelector(`.${styles.dropdownList}`);
    dropdownTrigger.addEventListener('click', (e) => handleDropdownClick(e, dropdown));


    return dropdown;
}


export default CategoriesDropdown;