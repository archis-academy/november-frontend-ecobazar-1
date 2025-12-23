import styles from "./Sidebar.module.scss";
import Dropdown from "@components/FilterSidebar/Dropdown";
import Slider from "@components/FilterSidebar/Slider/Slider";
import DiscountBox from "@components/FilterSidebar/DiscountBox/DiscountBox";
import SaleProducts from "@components/FilterSidebar/Sale/SaleProducts";
import categoriesChild from "../Categories/Categories";
import ratingsChild from "../Ratings/Ratings";
import tagsChild from "../Tags/Tags";

const Sidebar = () => {
    const filterAside = document.createElement('aside');
    filterAside.classList.add(styles.filterAside);
    filterAside.appendChild(Dropdown('All Categories', categoriesChild));
    filterAside.appendChild(Slider());
    filterAside.appendChild(Dropdown('Ratings', ratingsChild));
    filterAside.appendChild(Dropdown('Tags', tagsChild));
    filterAside.appendChild(DiscountBox());
    filterAside.appendChild(SaleProducts());

    return filterAside;
}


export default Sidebar;