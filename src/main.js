import page from "page";
import HomePage from "@pages/Home/Home";
import "./main.scss";
import { getCategories } from "./services/services";
import { storeData } from "./services/store";
import { renderFeaturesSection } from "./components/Features.js";

import "./components/features.css";

const app = document.querySelector("#app");

page("/", async () => {
  storeData.category = await getCategories();
  app.innerHTML = "";
  app.appendChild(HomePage());
  app.appendChild(renderFeaturesSection());
});

page();
