import styles from "./FilterSidebar.module.scss";
import CategoriesDropdown from "./CategoriesDropdown";
import Slider from "./Slider";

const FilterSidebar = () => {
    const filterAside = document.createElement('aside');
    filterAside.classList.add(styles.filterAside);
    filterAside.appendChild(CategoriesDropdown());
    filterAside.appendChild(Slider());


    return filterAside;
}


export default FilterSidebar;