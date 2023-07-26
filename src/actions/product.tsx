import axios from "axios";

export const fetchProducts = () => async (dispatch: any) => {
  dispatch({ type: "product/fetching" });
  try {
    const { data } = await axios.get("http://localhost:3000/products");
    dispatch({ type: "product/fetchingSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "product/fetchingFailed" });
  } finally {
    dispatch({ type: "product/fetchingFinally" });
  }
};

export const addProduct = (product: IProduct) => async (dispatch: any) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3000/products",
      product
    );
    dispatch({ type: "product/add", payload: data });
  } catch (error) {}
};

export const editProduct = (product: IProduct) => async (dispatch: any) => {
  try {
    const { data } = await axios.put(
      `http://localhost:3000/products/${product.id}`,
      product
    );
    dispatch({ type: "product/edit", payload: data });
  } catch (error) {}
};

export const deleteProduct = (id?: number) => async (dispatch: any) => {
  try {
    await axios.delete(`http://localhost:3000/products/${id}`);
    dispatch({ type: "product/delete", payload: id });
  } catch (error) {}
};
