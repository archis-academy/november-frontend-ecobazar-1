import "/src/components/Products/products.css";
import { getProducts } from "../../services/services.js";
import { ProductCard } from "./ProductCard.js";
import { storeData } from "../../services/store.js";

const renderProducts = (container) => {
  const wrapper = container.querySelector(".products-card-wrapper");
  storeData.products.forEach((product) => {
    wrapper.appendChild(ProductCard(product));
  });
};

export const ProductsSection = async () => {
  const container = document.createElement("section");
  container.classList.add("products-section");

  container.innerHTML = `
    <div class="products-header">
      <h1 class="products-title">Popular Products</h1>
      <a class="products-view-all-btn" href="#">
        <span>View All</span>
        <img src="/right-arrow.svg" alt="arrow">
      </a>
    </div>
    <div class="products-card-wrapper"></div>
  `;

  // ürünleri çek ve store'a kaydet
  storeData.products = await getProducts();

  // kartları wrapper içine ekle
  renderProducts(container);

  return container;
};

export default ProductsSection;
