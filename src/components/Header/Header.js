import styles from "./Header.module.scss";
import styleslogo from "@/images/Header/Logo.svg";


const Header = () => {
  const header = document.createElement("header");

  header.innerHTML = `
    <div class="${styles.parent}">

        <div class="${styles.left}">
            <small class="${styles.location}">
                Store location: Lincoln - 344, Illinois, Chicago, USA
            </small>
        </div>

        <div class="${styles.center}">
            <div class="${styles.brand}">
                 <img src="${styles.logo}" alt="Logo Image" />

                <h2 class="${styles.logoText}">Ecobazar</h2>
            </div>

            <div class="${styles.searchBox}">
                <input
                    class="${styles.searchInput}"
                    type="text"
                    placeholder="Search"
                />
                <button class="${styles.searchBtn}">Search</button>
            </div>
        </div>

        <div class="${styles.right}">
            <button class="${styles.wishlistBtn}">
                <svg viewBox="0 0 24 24" width="20" height="20">
                    <path 
                        d="M12 21s-7-4.35-9-7.1C-0.1 9.6 3 4 8 4c2 0 
                        3 .9 4 2 1-1.1 2-2 4-2 5 0 8.1 5.6 5 9.9-2 2.75-8 
                        7.1-8 7.1z" 
                        fill="#999"
                    />
                </svg>
            </button>

            <div class="${styles.cart}">
                <svg viewBox="0 0 24 24" width="20" height="20">
                    <path 
                        d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 
                        7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 
                        2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 
                        14h9.69l1.28-6H6.2" 
                        fill="#333"
                    />
                </svg>
                <span class="${styles.cartPrice}">$57.00</span>
            </div>
        </div>

    </div>
  `;

  return header;
};