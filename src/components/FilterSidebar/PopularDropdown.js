import styles from "./PopularDropdown.module.scss";
import { tags } from "@/lib/constants";
import { handlePopularClick } from "./handle";

const listItem = ({ id, content }) => (
    `   <li class= ${styles.popularTagWrapperItem}>
            <input type='checkbox' id=${id} name="tag"/>
            <label for=${id}>${content}</label>
        </li>
    `
)

const PopularDropdown = () => {
    const popular = document.createElement('div');
    popular.classList.add(styles.popular);

    popular.innerHTML = `
        <div class=${styles.popularHeader}>
            <h3 class=${styles.popularHeaderTitle}>Popular Tag</h3>
            <img class=${styles.popularHeaderArrow} src="/icons/dropdown-arrow.png" alt="arrow-icon" />
        </div>
        <ul class=${styles.popularTagWrapper}>
            ${tags.map((data) => listItem(data)).join("")}
        </ul>
    `

    const popularTrigger = popular.querySelector(`.${styles.popularHeader}`);
    popularTrigger.addEventListener('click', (e) => handlePopularClick(e, popular));

    return popular;
}

export default PopularDropdown;