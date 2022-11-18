import axios from "axios";

export const fetchData = (str) => {
  const apiEp = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${str}`;
  const response = axios(apiEp);

  return response;
};
