import "/src/components/Products/products.css";

export function ProductCard(product) {
  const card = document.createElement("div");
  card.innerHTML = `
    <div class="product-card">
      ${product.onSale ? `<div class="sale-label">${product.sale}</div>` : ""}
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <div class="product-info-wrapper">
        <div class="product-info">
          <p class="product-name">${product.name}</p>
          <h3 class="product-price">
            <span class="current-price">${product.price}</span>
            ${
              product.originalPrice
                ? `<span class="original-price">${product.originalPrice}</span>`
                : ""
            }
          </h3>
          <div class="product-rating">
            ${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}
          </div>
        </div>
        <button class="product-icon">
          <img src="${product.bagIcon}" alt="Bag Icon" />
        </button>
      </div>
    </div>
  `;
  return card;
}
