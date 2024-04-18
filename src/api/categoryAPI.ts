import http from "../http";
import checkStatus from "./checkStatus";

export const post = (data: Category) => {
  return http
    .post("/categories", data)
    .then((response) => checkStatus(response))
    .then((response) => response.data);
};

export const getAll = () => {
  return http.get("/categoies");
};
