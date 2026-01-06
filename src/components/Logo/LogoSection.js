
import styles from './LogoSection.module.scss';

const brands = [
  { name: "Steps", img: "/logo-images/Steps.png" },
  { name: "MANGO", img: "/logo-images/Mango.png" },
  { name: "Food", img: "/logo-images/Group.png" },
  { name: "FOOD", img: "/logo-images/food.png" },
  { name: "BOOK-OFF", img: "/logo-images/Bookoff.png" },
  { name: "G Series", img: "/logo-images/Gseries.png" },
];

const LogoSection = () => {
  const container = document.createElement("div");
  container.id = "brand-strip";
  container.innerHTML = `
    <div class="${styles['brand-strip']}">

      <div class="${styles['brand-strip__logos']}">
        ${brands
          .map(
            (b) => `
          <div class="${styles['brand-strip__logo']}">
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

    <p class="${styles['brand-strip__follow']}">Follow us on Instagram</p>
  `;
  return container;
};

export default LogoSection;
