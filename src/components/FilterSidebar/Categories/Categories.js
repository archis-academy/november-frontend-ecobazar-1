import { allCategories } from "@/lib/constants";
import categoriesStyles from "./Categories.module.scss";


const categoriesItem = ({ content, count, id }) => (
    `<li class=${categoriesStyles.categoriesWrapperItem}>   
        <input class=${categoriesStyles.categoriesWrapperRadio} type='radio' id=${id} name=${'categories'}/>
        <label class=${categoriesStyles.categoriesWrapperLabel} for=${id}>${content}</label>
        <span class=${categoriesStyles.categoriesWrapperCount}>${count}</span>
    </li>`
)

const categoriesChild = () => {
    const categoryList = document.createElement('ul');
    categoryList.classList.add(categoriesStyles.categoriesWrapper);
    categoryList.innerHTML = allCategories.map((category) => categoriesItem(category)).join("");
    return categoryList;
};

export default categoriesChild;