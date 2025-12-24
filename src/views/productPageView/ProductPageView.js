// import styles from "@components/FilterSidebar/Sidebar/Sidebar.module.scss";
import styles from "./ProductPageView.module.scss";
import Sidebar from "@components/FilterSidebar/Sidebar/Sidebar";


const ProductPageView = () => {
    const container = document.createElement('section');
    container.classList.add(styles.productPage);

    container.innerHTML = `
        <div class=${styles.productPageHeader}>
            <button class=${styles.productPageHeaderFilterBtn}>
                <span class=${styles.productPageHeaderFilterBtnText}>Filter</span>
                <img src="/icons/filter-icon.svg" alt="filter-icon" />
            </button>
        </div>
        <div class=${styles.productPageContent}>
            <div class=${styles.productPageContentSidebar}></div>
            <div class=${styles.productPageContentMain}>
                Product List will be here
                <div class=${styles.productPageContentMainProducts}>
                    <!-- Products will be rendered here -->
                </div>
                <div class=${styles.productPageContentMainPagination}>
                    <!-- Pagination will be here -->
                </div>
            </div>
        </div>
    `;

    const sidebarContainer = container.querySelector(`.${styles.productPageContentSidebar}`);
    sidebarContainer.appendChild(Sidebar());

    return container;
}

export default ProductPageView;