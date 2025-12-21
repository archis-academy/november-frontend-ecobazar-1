import dropdownStyles from "./FilterSidebar.module.scss";
import popularStyles from "./PopularDropdown.module.scss";
import cardStyles from "./SaleProducts.module.scss";

const handleDropdownClick = (e, dropdown) => {
    dropdown.classList.toggle(dropdownStyles.dropdownClosed);
}

const handlePopularClick = (e, popular) => {
    console.log(popular);
    popular.classList.toggle(popularStyles.dropdownClosed);
}

const handleCardClick = (e, sale) => {
    const clicked = sale.querySelector(`.${cardStyles.cardClicked}`);
    if (!clicked) {
        e.target.classList.add(cardStyles.cardClicked);
        return;
    }
    console.log(clicked);
    clicked.classList.remove(cardStyles.cardClicked);
    e.target.classList.add(cardStyles.cardClicked);
}

export { handleDropdownClick, handlePopularClick, handleCardClick };