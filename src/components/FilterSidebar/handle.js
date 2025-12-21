import dropdownStyles from "./FilterSidebar.module.scss";
import popularStyles from "./PopularDropdown.module.scss";

const handleDropdownClick = (e, dropdown) => {
    dropdown.classList.toggle(dropdownStyles.dropdownClosed);
}

const handlePopularClick = (e, popular) => {
    console.log(popular);
    popular.classList.toggle(popularStyles.dropdownClosed);
}


export { handleDropdownClick, handlePopularClick };