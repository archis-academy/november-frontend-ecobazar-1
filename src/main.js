import page from "page";
import HomePage from "@pages/Home/Home";
import "./main.scss";
import { getCategories, getNews } from "./services/services";
import { storeData } from "./services/store";

const app = document.querySelector("#app");

page("/", async () => {
  storeData.category = await getCategories();
  storeData.news = await getNews();
  app.innerHTML = "";
  app.appendChild(HomePage());
});

page();
