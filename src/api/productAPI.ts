import http from "../http";
import checkStatus from "./checkStatus";

export const post = (data: createProductRequest) => {
  return http
    .post<String>("/products", data)
    .then((response) => checkStatus(response))
    .then((response) => response.data);
};

export const get = (id: string) => {
  return http
    .get<GetProductResponse>(`/products/${id}`)
    .then((response) => checkStatus(response))
    .then((response) => response.data);
};
