import axios from "axios";

//api_key=APzmJ0apdYgy4qZa8XvLXdIBabthuxwtDUYLGpe0

const apiKey = "APzmJ0apdYgy4qZa8XvLXdIBabthuxwtDUYLGpe0";

const instance = axios.create({
  baseURL: `https://api.nasa.gov/planetary`,
});

export const nasaApi = {
  fetchImages(dates) {
    let params;

    if (!dates) {
      params = "start_date=2021-01-01&end_date=2021-01-10";
    } else if (typeof dates === "string") {
      params = `date=${dates}`;
    } else {
      params = `start_date=${dates[0]}&end_date=${dates[1]}`;
    }
    debugger;
    return instance
      .get(`apod?api_key=${apiKey}&${params}`)
      .then((response) => response.data);
  },
};
