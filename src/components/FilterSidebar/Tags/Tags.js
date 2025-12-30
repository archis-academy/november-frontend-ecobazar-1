import { tags } from "@/lib/constants";
// import styles from "../Sidebar/Sidebar.module.scss";
import tagStyles from "./Tags.module.scss"

const TagsItem = ({ id, content }) => (
    `<li class=${tagStyles.dropdownListItem}>   
        <input class=${tagStyles.dropdownListItemTag} type='checkbox' id=${id} name=${'tags'}/>
        <label class=${tagStyles.dropdownListItemTagLabel} for=${id}>${content}</label>
    </li>`
);

const tagsChild = () => {
    const tagList = document.createElement('ul');
    tagList.classList.add(tagStyles.tagWrapper);
    tagList.innerHTML = tags.map((tag) => TagsItem(tag)).join("");
    return tagList;
};

export default tagsChild;