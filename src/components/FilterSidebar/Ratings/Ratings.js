import { ratings } from "@/lib/constants";
import Stars from "@components/FilterSidebar/Stars";
import rateStyles from "./Ratings.module.scss";

const RatingsItem = ({ id, rate, content }) => (
    `<li class=${rateStyles.rateWrapperItem}>   
        <input class=${rateStyles.rateWrapperItemCheckbox} type='checkbox' id=${id} name=${'ratings'}/>
        <label class=${rateStyles.rateWrapperItemLabel} for=${id}>${Stars(rate)}</label>
        <span class=${rateStyles.rateWrapperItemText}>${content}</span>
    </li>`
);

const ratingsChild = () => {
    const ratingList = document.createElement('ul');
    ratingList.classList.add(rateStyles.rateWrapper);
    ratingList.innerHTML = ratings.map(rating => RatingsItem(rating)).join('');
    return ratingList;
};



export default ratingsChild;