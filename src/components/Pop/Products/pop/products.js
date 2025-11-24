import "/src/components/Pop/Products/pop/products.css";

const popularProducts = {
  name: "Green Apple",
  price: "$14.99",
  originalPrice: "$20.99",
  onSale: true,
  rating: 4,
  sale: "Sale 50%",
  image: "/public/images/grüneApfel.png", // ürün resmi
  bagIcon: "/public/images/Bag.svg", // çanta ikonu
};

export function RenderProduct() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="product-card">
    <div class="sale-label">${popularProducts.sale}</div>

      <img src="${popularProducts.image}" alt="" class="product-image" />
      <div class="product-info-wrapper">
      <div class="product-info">

      <p class="product-name">${popularProducts.name}</p>
      
      <h3 class="product-price">
        <span class="current-price">${popularProducts.price}</span>
        <span class="original-price">${popularProducts.originalPrice}</span>
      </h3>
      <div class="product-rating">
        ${"★".repeat(popularProducts.rating)}${"☆".repeat(
    5 - popularProducts.rating
  )}
  </div>
      </div>
      <button class="product-icon">
        <img src="${popularProducts.bagIcon}" alt="Lock Icon" />
      </button>
      </div>
    </div>
    </div>
  `;
}
