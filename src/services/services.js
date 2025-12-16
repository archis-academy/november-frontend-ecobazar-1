import { API } from "./restConfiguration";
import axios from "axios";

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API}/categories`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API}/products`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getComments = async () => {
  try {
    const response = await axios.get(`${API}/comments`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getNews = async () => {
  try {
    const { data } = await axios.get(`${API}/news`);
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
