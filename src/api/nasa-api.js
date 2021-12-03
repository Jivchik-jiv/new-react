import axios from "axios";

//api_key=APzmJ0apdYgy4qZa8XvLXdIBabthuxwtDUYLGpe0

const apiKey = "APzmJ0apdYgy4qZa8XvLXdIBabthuxwtDUYLGpe0";

const instance = axios.create({
  baseURL: `https://api.nasa.gov/planetary`,
});

export const nasaApi = {
  fetchImages(params) {
    return instance
      .get(`apod?api_key=${apiKey}&${params}`)
      .then((response) => response.data);
  },
};
