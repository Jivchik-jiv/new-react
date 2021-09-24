import axios from "axios";

// API key = a51c0bea7bca4770a81532058948c588

const instanceArticles = axios.create({
  headers: {
    Authorization: "Bearer a51c0bea7bca4770a81532058948c588",
  },
});

export const newsApi = {
  fetchNews(query, page = 1) {
    return instanceArticles
      .get(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=5&page=${page}`
      )
      .then((response) => {
        return response.data.articles;
      });
  },
};
