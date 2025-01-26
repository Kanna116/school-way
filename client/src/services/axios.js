import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
const BASE_API = axios.create({
  baseURL,
});

export default BASE_API;
