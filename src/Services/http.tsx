import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;
const http = axios.create({ baseURL: `${baseURL}/` });

function get(url: string, params = {}) {
  return http.get(url, {
    params,
  });
}

export { http, get };
