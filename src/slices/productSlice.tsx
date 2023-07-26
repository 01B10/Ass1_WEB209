import { createSlice } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, getProducts } from "../api/productApi";

const productSlice = createSlice({
  name: "Product",
  initialState: {
    products: [],
    isLoading: false,
    error: "",
  } as any,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    });
    builder.addCase(addProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products.push(payload);
    });
    builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
      state.products = state.products.filter(
        (item: any) => item.id !== payload
      );
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
