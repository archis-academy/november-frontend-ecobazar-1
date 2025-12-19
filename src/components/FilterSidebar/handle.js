import styles from "./FilterSidebar.module.scss";

const handleDropdownClick = (e, dropdown) => {

    dropdown.classList.toggle(styles.dropdownClosed);
}


export default handleDropdownClick;