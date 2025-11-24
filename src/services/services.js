import { API } from "./restConfiguration";
import axios from "axios";

export const getCategories = async () => {
    try {
        const response = await axios.get(`${API}/category`);
        return response.data;
    }
    catch (err) {
        console.error(err);
    }
};


export const getTestimonials = async ()=> {
    try {
        const response = await axios.get(`${API}/testimonials`);
        return response.data;

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}