import ProductPageView from "@/components/FilterSidebar/ProductPageView";

const ProductPage = () => {
    const section = document.createElement("section");

    section.appendChild(ProductPageView());

    return section;
}

export default ProductPage;