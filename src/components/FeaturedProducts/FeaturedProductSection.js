import "/src/components/Products/products.css";

import { ProductCard } from "../Products/ProductCard.js";
import { storeData } from "@/services/store.js";
import styles from "@components/Products/ProductsSection.module.scss";

const renderProducts = (container) => {
  const wrapper = container.querySelector(`.${styles.productsCardWrapper}`);
  const featuredProducts = storeData.products.filter((product) => {
    if (product.isFeatured) {
      return product;
    }
  });

  featuredProducts.slice(0, 5).forEach((product) => {
    wrapper.appendChild(ProductCard(product));
  });
};

export const FeaturedProductSection = () => {
  const container = document.createElement("section");
  container.classList.add(styles.products);

  container.innerHTML = `
    <div class="${styles.productsHeader}">
      <h1 class="${styles.productsTitle}">Featured Products</h1>
      <a class="${styles.productsViewAllBtn}" href="#">
        <span>View All</span>
        <img src="/right-arrow.svg" alt="arrow">
      </a>
    </div>
    <div class="${styles.productsCardWrapper}"></div>
  `;

  // kartları wrapper içine ekle
  renderProducts(container);

  return container;
};

export default FeaturedProductSection;
