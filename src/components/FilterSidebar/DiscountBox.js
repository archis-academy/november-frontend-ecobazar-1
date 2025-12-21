import styles from "./DiscountBox.module.scss";

const DiscountBox = () => {
    const discountBox = document.createElement('div');
    discountBox.classList.add(styles.discount);

    discountBox.innerHTML = `
        <div class=${styles.discountInner}>
            <div class=${styles.discountInnerHeader}>
                <h2 class=${styles.discountInnerHeaderTitle}>
                    <span>79%</span>
                    <span>Discount</span>
                </h2>
                <span>on your first order</span>
            </div>
            <div class=${styles.discountInnerLink}>
                <a href="#">
                    Shop Now
                    <img src="/icons/shop-now-icon.svg" alt="shop-now-icon" />
                </a>
            </div>
        </div>
    `;

    return discountBox;

}



export default DiscountBox;