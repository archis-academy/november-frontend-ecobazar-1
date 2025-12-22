import styles from "@components/FilterSidebar/Sidebar/Sidebar.module.scss";
import Sidebar from "@components/FilterSidebar/Sidebar/Sidebar";


const ProductPageView = () => {
    const container = document.createElement('div');
    container.classList.add(styles.productPage);

    container.appendChild(Sidebar());

    return container;
}

export default ProductPageView;