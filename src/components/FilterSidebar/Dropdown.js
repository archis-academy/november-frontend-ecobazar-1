import styles from "./Sidebar/Sidebar.module.scss";
import { handleDropdownClick } from "./handle"
import Stars from "./Stars";

const categoriesItem = ({ content, count, rate, id }, type) => (
    `<li class=${styles.dropdownListItem}>   
        <input class=${type === 'radio' && styles.dropdownListItemRadio} type=${type} id=${id} name=${type === 'radio' && 'categories'}/>
        <label class=${styles.dropdownListItemLabel} for=${id}>${type === 'radio' ? content : rate.toFixed(1)}</label>
        ${count ? `<span class=${styles.dropdownListItemCount}>(${count})</span>` : `<div class=${styles.rateWrapper}><span class=${styles.starsWrapper}>${Stars(rate)}</span><span>${content}</span></div>`}
    </li>`
)

const Dropdown = (triggerText, allCategories, type) => {

    const dropdown = document.createElement('div');
    dropdown.classList.add(styles.dropdown);

    dropdown.innerHTML = `
        <div class=${styles.dropdownHeader}>
            <h2 class= ${styles.dropdownHeaderTitle}>${triggerText}</h2>
            <img class=${styles.dropdownHeaderArrow} src="/icons/dropdown-arrow.png" alt="arrow-icon" />
        </div>
        <ul class=${styles.dropdownList}>
            ${allCategories.map((listItem) => categoriesItem(listItem, type)).join("")}
        </ul>
    `;

    const dropdownTrigger = dropdown.querySelector(`.${styles.dropdownHeader}`);
    dropdownTrigger.addEventListener('click', (e) => handleDropdownClick(e, dropdown));


    return dropdown;
}


export default Dropdown;