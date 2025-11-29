import styles from "./Header.module.scss";
import arrowIcon from "@images/Header/arrow.svg";
import heartIcon from "@images/Header/heart.svg";
import locationIcon from "@images/Header/location.svg";
import logoIcon from "@images/Header/logo.svg";
import searchIcon from "@images/Header/search.svg";
//import sepetIcon from "@images/Header/cart.svg";

const Header = () => {
  const header = document.createElement("header");
  header.classList.add(styles.header);
header.innerHTML = `
  <div class="${styles.inner}">

    <!-- TOP BAR -->
    <div class="${styles.top}">

      <div class="${styles.location}">
        <img src="${locationIcon}" alt="location" class="${styles.icon}" />
        <span>Store Location: Lincoln - 344, Illinois, Chicago, USA</span>
      </div>

      <div class="${styles.language}">
        Eng
        <img src="${arrowIcon}" alt="arrow" class="${styles.arrowIcon}" />
      </div>

      <div class="${styles.currency}">
        USD
        <img src="${arrowIcon}" alt="arrow" class="${styles.arrowIcon}" />
      </div>

      <div class="${styles.auth}">
        <a href="#">Sign In</a> / <a href="#">Sign Up</a>
      </div>

    </div> <!-- /top -->


    <!-- BOTTOM BAR -->
    <div class="${styles.bottom}">

      <div class="${styles.logo}">
        <img src="${logoIcon}" alt="logo" class="${styles.logoIcon}" />
        <span class="${styles.logoText}">Ecobazar</span>
      </div>

      <div class="${styles.searchBox}">
        <img src="${searchIcon}" alt="search" class="${styles.searchIcon}" />
        <input type="text" class="${styles.searchInput}" placeholder="Search" />
        <button class="${styles.searchBtn}">
          <span>Search</span>
        </button>
      </div>

      <button class="${styles.iconBtn}">
        <img src="${heartIcon}" alt="wishlist" class="${styles.icon}" />
      </button>

      <div class="${styles.cart}">
        <button class="${styles.cartBtn}">
          <img src="${""}" alt="cart" class="${styles.icon}" />
        </button>
        <span class="${styles.cartTotal}">$57.00</span>
      </div>

    </div> <!-- /bottom -->

  </div>
`;

  return header;
};

export default Header;
