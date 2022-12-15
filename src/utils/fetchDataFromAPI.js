import axios from "axios";

const YT_BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YT_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchDataFromAPI = async (url) => {
  const { data } = await axios.get(`${YT_BASE_URL}/${url}`, options);

  return data;
};
