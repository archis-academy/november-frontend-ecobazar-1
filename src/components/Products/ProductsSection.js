import "/src/components/Products/products.css";

import { ProductCard } from "./ProductCard.js";
import { storeData } from "../../services/store.js";
import styles from "./ProductsSection.module.scss";

const renderProducts = (container) => {
  const wrapper = container.querySelector(`.${styles.productsCardWrapper}`);

  storeData.products.forEach((product) => {
    wrapper.appendChild(ProductCard(product));
  });
};

export const ProductsSection = () => {
  const container = document.createElement("section");
  container.classList.add(styles.products);

  container.innerHTML = `
    <div class="${styles.productsHeader}">
      <h1 class="${styles.productsTitle}">Popular Products</h1>
      <a class="${styles.productsViewAllBtn}" href="#">
        <span>View All</span>
        <img src="/right-arrow.svg" alt="arrow">
      </a>
    </div>
    <div class="${styles.productsCardWrapper}"></div>
  `;

  // ürünleri çek ve store'a kaydet

  // kartları wrapper içine ekle
  renderProducts(container);

  return container;
};

export default ProductsSection;
