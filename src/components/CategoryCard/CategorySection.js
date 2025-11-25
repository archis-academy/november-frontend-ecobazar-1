import styles from "./CategorySection.module.scss";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import { storeData } from "@/services/store";

const renderCards = (container) => {
    const { categories } = storeData;
    const wrapper = container.querySelector(`.${styles.categoryCardWrapper}`);
    categories.forEach((card) => wrapper.appendChild(CategoryCard(card)));
}

const CategorySection = () => {
    const container = document.createElement("section");
    container.classList.add(styles.category);

    container.innerHTML = `
    <div class="${styles.categoryHeader}">
        <h1 class="${styles.categoryTitle}">Popular Categories</h1>
        <a class="${styles.categoryViewAllBtn}" href="#">
            <span>View All</span>
            <img src="/right-arrow.svg" alt="arrow">
        </a>
    </div> 
    <div class="${styles.categoryCardWrapper}"></div> 
    `

    // this function adds the cards to the categoryCardWrapper
    renderCards(container);

    return container;

}

export default CategorySection;