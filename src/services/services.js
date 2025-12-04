import { API } from "./restConfiguration";
import axios from "axios";

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API}/category`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get("/public/product.json");
    return response.data.popularProducts;
  } catch (err) {
    console.error("Ürünler alınamadı:", err);
    return [];
  }
};
