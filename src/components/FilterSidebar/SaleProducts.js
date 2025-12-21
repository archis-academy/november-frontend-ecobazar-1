import styles from "./SaleProducts.module.scss";
import { saleProducts } from "@/lib/constants";
import Stars from "./Stars";
import { handleCardClick } from "./handle";

const saleProductCard = ({ path, name, price, oldPrice, rate }) => {
    const card = `
        <div class=${styles.card}>
            <div class=${styles.cardImageWrapper}>
                <img src=${path} alt="product-image"/>
            </div>
            <div class=${styles.cardContent}>
                <div class=${styles.cardContentHeader}>
                    <h4>${name}</h4>
                    <p class=${styles.cardContentHeaderPriceWrapper}>
                        <span>${price.toFixed(2)}</span>
                        <span>${oldPrice}</span>
                    </p>
                </div>
                <div class=${styles.cardContentStars}>${Stars(rate)}</div>
            </div>
        </div>
    `

    return card;
}

const SaleProducts = () => {
    const sale = document.createElement('div');
    sale.classList.add(styles.sale);

    sale.innerHTML = `
        <div class=${styles.saleInner}> 
            <h2 class=${styles.saleInnerHeader}>Sale Products</h2>
            <div class=${styles.saleInnerProductWrapper}>
                ${saleProducts.map((product) => saleProductCard(product)).join("")}
            </div>
        </div>
    `;

    const cards = sale.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => {
        card.addEventListener('click', (e) => handleCardClick(e, sale));
    })

    return sale;
}

export default SaleProducts;