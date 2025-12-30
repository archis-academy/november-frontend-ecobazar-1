import dropdownStyles from "./Sidebar/Sidebar.module.scss";
import cardStyles from "./Sale/SaleProducts.module.scss";

const handleDropdownClick = (e, dropdown) => {
    const dropdownList = dropdown.querySelector(`.${dropdownStyles.dropdownList}`);
    const height = dropdownList.scrollHeight;
    dropdown.classList.toggle(dropdownStyles.dropdownClosed);

    if (dropdown.classList.contains(dropdownStyles.dropdownClosed)) {
        dropdownList.style.height = `0px`;
        return;
    }

    dropdownList.style.height = height + 'px';

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

export { handleDropdownClick, handleCardClick };