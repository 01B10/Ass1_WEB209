import { useAppDispatch, useAppSelector } from "../store/hook";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "../api/productApi";

const DashBoard = () => {
  const dispatch: Dispatch<any> = useAppDispatch();
  const { products } = useAppSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="p-3">
      <Link
        to={"/formAdd"}
        className="px-2 py-2 bg-green-500 rounded text-white"
      >
        Add Product
      </Link>
      <table className="m-auto">
        <thead>
          <tr>
            <th className="px-2">STT</th>
            <th className="px-2">Name</th>
            <th className="px-2">Price</th>
            <th className="px-2">Images</th>
            <th className="px-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: IProduct, index: number) => {
            return (
              <tr key={product.id} className="text-center">
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.images}</td>
                <td className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-red-500 rounded text-white"
                    onClick={() => dispatch(deleteProduct(product.id))}
                  >
                    Delete
                  </button>
                  <Link
                    to={"/formEdit/" + product.id}
                    className="px-2 py-1 bg-blue-500 rounded text-white"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard;
