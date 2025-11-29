import styles from "./Header.module.scss";
import arrowIcon from "@images/Header/arrow.svg";
import heartIcon from "@images/Header/heart.svg";
import locationIcon from "@images/Header/location.svg";
import logoIcon from "@images/Header/logo.svg";
import searchIcon from "@images/Header/search.svg";
//import cartIcon from "@images/Header/cart.svg";

const Header = () => {
  const header = document.createElement("header");
  header.classList.add(styles.header);

  header.innerHTML = `
    <div class="${styles.inner}">

      <div class="${styles.left}">
          <div class="${styles.location}">
             <img src="${locationIcon}" alt="location" class="${styles.icon}" />
             <span>Store Location: Lincoln - 344, Illinois, Chicago, USA</span>
          </div>

          <div class="${styles.logo}">
             <img src="${logoIcon}" alt="logo" class="${styles.logoIcon}" />
             <span class="${styles.logoText}">Ecobazar</span>
          </div>
      </div>

      <div class="${styles.center}">
        <div class="${styles.searchBox}">
           <img src="${searchIcon}" alt="search" class="${styles.searchIcon}" />
           <input type="text" class="${styles.searchInput}" placeholder="Search" />
           <button class="${styles.searchBtn}">
              <img src="${arrowIcon}" alt="submit search" class="${styles.submitIcon}" />
           </button>
        </div>
      </div>

      <div class="${styles.right}">
          <button class="${styles.iconBtn}">
            <img src="${heartIcon}" alt="wishlist" class="${styles.icon}" />
          </button>

          <div class="${styles.cart}">
              <button class="${styles.cartBtn}">
                 <img src="${""}" alt="cart" class="${styles.icon}" />
              </button>
              <span class="${styles.cartTotal}">$57.00</span>
          </div>
      </div>

    </div>
  `;

  return header;
};

export default Header;
