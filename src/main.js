import page from "page";
import HomePage from "@pages/Home/Home";
import "./main.scss";
import { getCategories, getTestimonials } from "./services/services";
import { storeData } from "./services/store";

const app = document.querySelector("#app");

page("/", async () => {
  storeData.category = await getCategories();
  // storeData.testimonials = await getTestimonials();
  // console.log(storeData.testimonials);
  app.innerHTML = "";
  app.appendChild(HomePage());
  
});

page();
