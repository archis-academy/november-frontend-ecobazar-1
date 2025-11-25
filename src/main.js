import page from "page";
import HomePage from "@pages/Home/Home";
import "./main.scss";
import { getCategories, getComments } from "./services/services";
import { storeData } from "./services/store";

const app = document.querySelector("#app");

page("/", async () => {
  storeData.categories = await getCategories();
  storeData.comments = await getComments();
  app.innerHTML = "";
  app.appendChild(HomePage());
  
});

page();
