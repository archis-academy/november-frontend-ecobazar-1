import style from "./LatestNews.module.scss";
import Button from "../Button/Button";
import { storeData } from "@/services/store";
import { getNews } from "@/services/services";

const LatestNews = () => {
  const section = document.createElement("section");
  section.className = style.LatestNewsSection;
  section.innerHTML = `
    <div class="${style.newsSection}">
      <div class="${style.title}"><h1>Latest News</h1></div>
      <div class="${style.newsContainer}"></div>
    </div>
  `;

  const container = section.querySelector(`.${style.newsContainer}`);

  const render = (news = []) => {
    if (!news.length) {
      container.innerHTML = "";
      return;
    }

    const latest = [];
    const seen = new Set();
    for (const item of news) {
      if (seen.has(item.category)) continue;
      latest.push(item);
      seen.add(item.category);
      if (latest.length === 3) break;
    }

    container.innerHTML = latest
      .map((item) => {
        const date = new Date(item.createdDate);
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        const body =
          item.body.length > 100 ? `${item.body.slice(0, 100)}...` : item.body;

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
                <span><img src="/src/images/latest-news-images/tag.svg" />${item.topic}</span>
                <span><img src="/src/images/latest-news-images/person.svg" />By Admin</span>
                <span><img src="/src/images/latest-news-images/comment.svg" /> ${item.commentCount} comment</span>
              </div>
              <p class="${style.body}">${body}</p>
              <button class="${style.button}"></button>
            </div>
          </div>
        `;
      })
      .join("");

    container.querySelectorAll(`.${style.button}`).forEach((btn) =>
      btn.replaceWith(
        Button({
          content: `Read More <img src="/src/images/button-images/right-arrow-ecobazar.svg" alt="Right Arrow" />`,
          variant: "outline",
        })
      )
    );
  };

  if (storeData.news?.length) {
    render(storeData.news);
  } else {
    getNews()
      .then(render)
      .catch(() => render([]));
  }

  return section;
};

export default LatestNews;
