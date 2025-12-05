import "@components/Features/features.css";
export default function RenderFeaturesSection() {
  const section = document.createElement("section");
  section.className = "features-wrapper";
  section.innerHTML = `
    
      <section class="features">
        <div class="feature-box">
          <img src="/images/delivery-truck-1.svg" alt="" />
          <div class="feature-box-container">
            <h3>Free Shipping</h3>
            <p>Free shipping on all your order</p>
          </div>
        </div>

        <div class="feature-box">
          <img src="/images/heads.svg" alt="" />
          <div class="feature-box-container">
            <h3>Customer Support 24/7</h3>
            <p>Instant access to Support</p>
          </div>
        </div>

        <div class="feature-box">
          <img src="/images/bag.svg" alt="" />
          <div class="feature-box-container">
            <h3>100% Secure Payment</h3>
            <p>We ensure your money is safe</p>
          </div>
        </div>

        <div class="feature-box">
          <img src="/images/package.svg" alt="" />
          <div class="feature-box-container">
            <h3>Money-Back Guarantee</h3>
            <p>30 Days Money-Back Guarantee</p>
          </div>
        </div>
      </section>
    </div>
  `;
  return section;
}
