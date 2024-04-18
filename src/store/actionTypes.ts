import { AxiosError } from "axios";
import { ErrorInfo } from "react";
import { ErrorResponse } from "react-router-dom";

export type ActionType = {
  type: string;
  payload: object;
};

export type DispatchType = (action: ActionType) => ActionType;

export const ADD_PRODUCT_PENDING = "ADD_PRODUCT_PENDING";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";
