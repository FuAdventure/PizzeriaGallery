import axios from "axios";
//import { API_URL } from "@env";

export default axios.create({
  //baseURL: "http://144.126.209.227",
    //baseURL: API_URL,
  //baseURL: "http://127.0.0.1:8000",
  baseURL: "http://www.pizzavspizza.com",
});
