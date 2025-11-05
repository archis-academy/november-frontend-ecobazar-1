import page from "page";
import HomePage from "@pages/Home/Home";
import "./main.scss";

const app = document.querySelector("#app");

page("/", () => {
  app.appendChild(HomePage());
});

page();
