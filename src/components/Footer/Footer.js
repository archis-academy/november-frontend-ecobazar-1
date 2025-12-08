import styles from "./Footer.module.scss";
import { account, helps, proxy, categories, payment } from "@/lib/constants";

const renderListItem = (item) => (
    `<li class=${styles.footerColsListItem}>
        <a href="#">${item}</a>
    </li>`
)

const renderList = (listArray) => (
    `
        <ul class=${styles.footerColsList}>
            ${listArray.map((item) => renderListItem(item)).join("")}
        </ul>
    `
)

const renderPaymentImage = (imageArray) => (
    `${imageArray.map((image) => ` <img src="/images/${image}"  alt="payment-method"/>`).join("")}`
)

const Footer = () => {
    const footer = document.createElement("footer");
    footer.classList.add(styles.footer);

    footer.innerHTML =
        `
        <div class=${styles.footerContentWrapper}>
            <div class=${styles.footerContentInner}>

                <div class=${styles.footerCol1}>
                    <h1 class=${styles.footerCol1Title}>
                        <img src="/flower.svg" alt="ecobazar-icon"/>
                        Ecobazar
                    </h1>
                    <p class=${styles.footerCol1TextContent}>
                        Morbi cursus porttitor enim lobortis molestie. 
                        Duis gravida turpis dui, eget bibendum magna congue nec.
                    </p>

                    <div class=${styles.footerCol1Contact}>
                        <span class=${styles.footerCol1Phone}>(219) 555-0114</span>
                        <span class=${styles.footerCol1Or}>or</span>
                        <span class=${styles.footerCol1Email}>Proxy@gmail.com</span>
                    </div>
                </div>


                <div class=${styles.footerCols}>
                    <h3 class=${styles.footerColsTitle}>My Account</h3>
                    ${renderList(account)}
                </div>

                <div class=${styles.footerCols}>
                    <h3 class=${styles.footerColsTitle}>Helps</h3>
                   ${renderList(helps)}
                </div>

                <div class=${styles.footerCols}>
                    <h3 class=${styles.footerColsTitle}>Proxy</h3>
                    ${renderList(proxy)}
                </div>

                <div class=${styles.footerCols}>
                    <h3 class=${styles.footerColsTitle}>Categories</h3>
                    ${renderList(categories)}
                </div>

            </div>

            <div class=${styles.footerBanner}>
                <span class=${styles.footerBannerText}>Ecobazar eCommerce © 2021. All Rights Reserved</span>
                <div class=${styles.footerBannerPayment}>
                ${renderPaymentImage(payment)}
                </div>
            </div>
        </div>
    `;


    return footer;
}

export default Footer;