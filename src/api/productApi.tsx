import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/products");
    return data;
  } catch (error) {}
});

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product: IProduct) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/products",
        product
      );
      return data;
    } catch (error) {}
  }
);

export const editProduct = createAsyncThunk(
  "product/editProduct",
  async (product: IProduct) => {
    try {
      const { data } = await axios.put(
        "http://localhost:3000/products/" + product.id,
        product
      );
      return data;
    } catch (error) {}
  }
);

export const deleteProduct = createAsyncThunk(
  "product/editProduct",
  async (id: number | undefined) => {
    try {
      await axios.put("http://localhost:3000/products/" + id);
      return id;
    } catch (error) {}
  }
);
