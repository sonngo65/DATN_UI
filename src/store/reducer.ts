import { act } from "react-dom/test-utils";
import * as type from "./actionTypes";
const initialState = {
  isLoading: false,
  error: null,
  data: {},
};
const reducer = (state: any = initialState, action: type.ActionType) => {
  switch (action.type) {
    case type.ADD_PRODUCT_PENDING:
      return { ...state, isLoading: true };
    case type.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: { ...state.data, ...action.payload },
      };
    case type.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: (action.payload as any).message,
      };
  }
};
export default reducer;
