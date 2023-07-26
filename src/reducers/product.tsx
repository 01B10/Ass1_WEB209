import { produce } from "immer";

const initialState = { products: [], isLoading: false, error: "" } as any;

export const productReducer = (state = initialState, action: any) => {
  return produce(state, (draftState: any) => {
    switch (action.type) {
      case "product/fetching":
        draftState.isLoading = true;
        break;
      case "product/fetchingSuccess":
        (draftState.isLoading = false), (draftState.products = action.payload);
        break;
      case "product/fetchingFailed":
        draftState.error = action.payload;
        draftState.isLoading = false;
        break;
      case "product/fetchingFinally":
        draftState.isLoading = false;
        break;
      case "product/add":
        draftState.products.push(action.payload);
        break;
      case "product/edit":
        const product = action.payload;
        draftState.products = state.products.map((item: any) =>
          item.id === product.id ? product : item
        );
        break;
      case "product/delete":
        const id = action.payload;
        draftState.products = state.products.filter(
          (item: any) => item.id != id
        );
        break;
      default:
        break;
    }
  });
};
