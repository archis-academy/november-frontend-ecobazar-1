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

export const getNews = async () => {
  try {
    const { data } = await axios.get(`${API}/news`);
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
