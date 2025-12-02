import styles from "./Header.module.scss";
import arrowIcon from "@images/Header/arrow.svg";
import heartIcon from "@images/Header/heart.svg";
import locationIcon from "@images/Header/location.svg";
import logoIcon from "@images/Header/logo.svg";
import searchIcon from "@images/Header/search.svg";
import sepetIcon from "@images/Header/sepet.svg";

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

<div class="${styles.language}" id="language-btn">
  <span>English</span>
  <img src="${arrowIcon}" alt="arrow" class="${styles.arrowIcon}" />

  <ul class="${styles.dropdown}">
    <li data-lang="en">English</li>
    <li data-lang="tr">Türkçe</li>
    <li data-lang="de">Deutsch</li>
  </ul>
</div>

<div class="${styles.currency}" id="currency-btn">
  <span>USD</span>
  <img src="${arrowIcon}" alt="arrow" class="${styles.arrowIcon}" />

  <ul class="${styles.dropdown}">
    <li data-currency="usd">USD</li>
    <li data-currency="eur">EUR</li>
    <li data-currency="gbp">GBP</li>
  </ul>
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
        <button class="${styles.sepetIconBtn}">
          <img src="${sepetIcon}" alt="sepet" class="${styles.icon}" />
        </button>
        <span class="${styles.cartTotal}">$57.00</span>
      </div>

    </div> <!-- /bottom -->

  </div>
`;

  return header;
};

export default Header;


export const initHeaderEvents = () => {
  const langBtn = document.getElementById("language-btn");
  const currencyBtn = document.getElementById("currency-btn");

  function setupDropdown(btn) {
    if (!btn) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.classList.toggle(styles.active);
    });

    const items = btn.querySelectorAll("li");

    items.forEach((item) => {
      item.addEventListener("click", () => {
        btn.querySelector("span").innerText = item.innerText;
        btn.classList.remove(styles.active);
      });
    });
  }

  setupDropdown(langBtn);
  setupDropdown(currencyBtn);

  document.addEventListener("click", () => {
    langBtn?.classList.remove(styles.active);
    currencyBtn?.classList.remove(styles.active);
  });
};