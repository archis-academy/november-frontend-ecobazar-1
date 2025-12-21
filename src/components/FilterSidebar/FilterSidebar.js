import styles from "./FilterSidebar.module.scss";
import Dropdown from "./Dropdown";
import Slider from "./Slider";
import { allCategories } from "@/lib/constants";
import { ratings } from "@/lib/constants";
import PopularDropdown from "./PopularDropdown";
import DiscountBox from "./DiscountBox";
import SaleProducts from "./SaleProducts";

const FilterSidebar = () => {
    const filterAside = document.createElement('aside');
    filterAside.classList.add(styles.filterAside);
    filterAside.appendChild(Dropdown('All Categories', allCategories, 'radio'));
    filterAside.appendChild(Slider());
    filterAside.appendChild(Dropdown('Ratings', ratings, 'checkbox'));
    filterAside.appendChild(PopularDropdown());
    filterAside.appendChild(DiscountBox());
    filterAside.appendChild(SaleProducts());

    return filterAside;
}


export default FilterSidebar;