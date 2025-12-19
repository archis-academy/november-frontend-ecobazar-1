import styles from "./FilterSidebar.module.scss";
import FilterSidebar from "./FilterSidebar";

const ProductPageView = () => {
    const container = document.createElement('div');
    container.classList.add(styles.productPage);

    container.appendChild(FilterSidebar());

    return container;
}

export default ProductPageView;