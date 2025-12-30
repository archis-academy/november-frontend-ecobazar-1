import ProductPageView from "@/views/productPageView/ProductPageView";

const ProductPage = () => {
    const section = document.createElement("section");

    section.appendChild(ProductPageView());

    return section;
}

export default ProductPage;