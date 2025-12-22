import dropdownStyles from "./Sidebar/Sidebar.module.scss";
import popularStyles from "./Popular/PopularDropdown.module.scss";
import cardStyles from "./Sale/SaleProducts.module.scss";

const handleDropdownClick = (e, dropdown) => {
    dropdown.classList.toggle(dropdownStyles.dropdownClosed);
}

const handlePopularClick = (e, popular) => {
    popular.classList.toggle(popularStyles.dropdownClosed);
}

const handleCardClick = (e, sale) => {
    const clicked = sale.querySelector(`.${cardStyles.cardClicked}`);
    if (!clicked) {
        e.target.classList.add(cardStyles.cardClicked);
        return;
    }
    clicked.classList.remove(cardStyles.cardClicked);
    e.target.classList.add(cardStyles.cardClicked);
}

export { handleDropdownClick, handlePopularClick, handleCardClick };