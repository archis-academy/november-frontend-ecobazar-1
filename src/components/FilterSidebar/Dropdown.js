import styles from "./Sidebar/Sidebar.module.scss";
import { handleDropdownClick } from "./handle"


const Dropdown = (triggerText, child) => {

    const dropdown = document.createElement('div');
    dropdown.classList.add(styles.dropdown);

    dropdown.innerHTML = `
        <div class=${styles.dropdownHeader}>
            <h2 class= ${styles.dropdownHeaderTitle}>${triggerText}</h2>
            <img class=${styles.dropdownHeaderArrow} src="/icons/dropdown-arrow.png" alt="arrow-icon" />
        </div>
        <div class=${styles.dropdownList}>
            ${child()}
        </div>
    `;

    const dropdownTrigger = dropdown.querySelector(`.${styles.dropdownHeader}`);
    dropdownTrigger.addEventListener('click', (e) => handleDropdownClick(e, dropdown));


    return dropdown;
}

export default Dropdown;