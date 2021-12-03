import axios from "axios";

// API key news = a51c0bea7bca4770a81532058948c588

// API key images = 21872021-de688e9cfaf53d124bb8f01aa

const imagesAPIKey = "21872021-de688e9cfaf53d124bb8f01aa";

const instanceArticles = axios.create({
  headers: {
    Authorization: "Bearer a51c0bea7bca4770a81532058948c588",
  },
});

export const newsApi = {
  fetchNews({ query, page = 1 }) {
    return instanceArticles
      .get(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=5&page=${page}`
      )
      .then((response) => {
        return response.data.articles;
      });
  },
};

export const imagesAPI = {
  fetchImages({ query, page }) {
    return axios
      .get(
        `https://pixabay.com/api/?key=${imagesAPIKey}&q=${query}&per_page=8&page=${page}`
      )
      .then((responce) => responce.data.hits);
  },
};
