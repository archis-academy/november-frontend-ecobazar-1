import axios from "axios";
import style from "./LatestNews.module.scss";
import Button from "../Button/Button";

const LatestNews = () => {
  const LatestNewsSection = document.createElement("section");
  LatestNewsSection.className = `${style.LatestNewsSection}`;

  LatestNewsSection.innerHTML = `
    <div class="${style.newsSection}">
      <div class="${style.title}"><h1>Latest News</h1></div>
      <div class="${style.newsContainer}"></div>
    </div>
  `;

  const newsContainer = LatestNewsSection.querySelector(`.${style.newsContainer}`);

  axios.get("http://localhost:3001/news").then((res) => {
    const allNews = res.data;
    const uniqueCategories = new Set();
    const latestNews = [];

    for (const item of allNews) {
      if (!uniqueCategories.has(item.category)) {
        latestNews.push(item);
        uniqueCategories.add(item.category);
        if (latestNews.length === 3) break;
      }
    }

    newsContainer.innerHTML = latestNews
      .map((item) => {
        const day = new Date(item.createdDate).getDate();
        const month = new Date(item.createdDate).toLocaleString("en-US", {
          month: "short",
        });
        const shortBody =
          item.body.length > 100 ? item.body.substring(0, 100) + "..." : item.body;

        return `
          <div class="${style.card}">
            <div class="${style.image}">
              <img src="${item.imageUrl}" alt="${item.title}" />
              <div class="${style.date}">
                <span class="${style.day}">${day}</span>
                <span class="${style.month}">${month}</span>
              </div>
            </div>

            <div class="${style.content}">
              <div class="${style.tags}">
                <span><img src="/src/images/latest-news-images/tag.svg"/>${item.topic}</span>
                <span><img src="/src/images/latest-news-images/person.svg"/>By Admin</span>
                <span><img src="/src/images/latest-news-images/comment.svg"/> ${item.commentCount} comment</span>
              </div>
              <p class="${style.body}">
                ${shortBody}
              </p>
              <!-- Burada sadece boş bir button placeholder bırakıyoruz -->
              <button class="${style.button}"></button>
            </div>
          </div>
        `;
      })
      .join("");

    const buttonEls = newsContainer.querySelectorAll(`.${style.button}`);

    buttonEls.forEach((btnEl) => {
      const newButton = Button({
        content: `Read More <img src="/src/images/button-images/right-arrow-ecobazar.svg" alt="Right Arrow" />`,
        variant: "outline",
      });

      btnEl.replaceWith(newButton);
    });
  });

  return LatestNewsSection;
};

export default LatestNews;
