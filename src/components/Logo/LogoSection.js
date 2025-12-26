
const brands = [
    { name :"Steps",img:"/images/Vector(8).png"},
  { name: "MANGO", img: "/images/mango-1.png" },
  { name: "Food", img: "/images/Group.png" },
  { name: "FOOD", img: "/images/food.png" },
  { name: "BOOK-OFF", img: "/images/bookoff-corporation-logo.png" },
  { name: "G Series", img: "/images/Group(1).png" },
];

const container = document.getElementById("brand-strip");

container.innerHTML = `
  <div class="brand-strip">
    <span class="brand-strip__steps">steps</span>

    <div class="brand-strip__logos">
      ${brands
        .map(
          (b) => `
        <div class="brand-strip__logo">
          <img 
            src="${b.img}" 
            alt="${b.name}" 
            loading="lazy"
          >
        </div>
      `
        )
        .join("")}
    </div>
  </div>

  <p class="brand-strip__follow">Follow us on Instagram</p>
`;
