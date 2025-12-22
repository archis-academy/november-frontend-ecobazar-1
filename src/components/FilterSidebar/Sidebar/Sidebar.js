import styles from "./Sidebar.module.scss";
import Dropdown from "@components/FilterSidebar/Dropdown";
import Slider from "@components/FilterSidebar/Slider/Slider";
import { allCategories } from "@/lib/constants";
import { ratings } from "@/lib/constants";
import PopularDropdown from "@components/FilterSidebar/Popular/PopularDropdown";
import DiscountBox from "@components/FilterSidebar/DiscountBox/DiscountBox";
import SaleProducts from "@components/FilterSidebar/Sale/SaleProducts";

const Sidebar = () => {
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


export default Sidebar;