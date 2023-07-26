import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../validate/IForm";
// import { addProduct } from "../actions/product";
import { Dispatch } from "react";
import { useAppDispatch } from "../store/hook";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../api/productApi";

const FormAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    mode: "onChange",
    resolver: yupResolver(FormSchema),
  });
  const dispatch: Dispatch<any> = useAppDispatch();
  const navigate = useNavigate();
  const onAdd = (data: IProduct) => {
    dispatch(addProduct(data));
    navigate("/");
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit(onAdd)}
      className="w-[300px] mx-auto"
    >
      <label htmlFor="" className="block mb-5">
        <span>Name:</span>
        <input
          {...register("name")}
          name="name"
          id=""
          className="border-[2px] border-solid outline-none border-black w-full"
        />
        <span className="error text-red-400">{errors.name?.message}</span>
      </label>
      <label htmlFor="" className="block mb-5">
        <span>Price:</span>
        <input
          {...register("price")}
          name="price"
          id=""
          className="border-[2px] border-solid outline-none border-black w-full"
        />
        <span className="error text-red-400">{errors.price?.message}</span>
      </label>
      <label htmlFor="" className="block mb-5">
        <span>Images:</span>
        <input
          {...register("images")}
          name="images"
          id=""
          className="border-[2px] border-solid outline-none border-black w-full"
        />
        <span className="error text-red-400">{errors.images?.message}</span>
      </label>
      <button className="bg-green-500 text-white py-2 px-3 rounded">Add</button>
    </form>
  );
};

export default FormAdd;
