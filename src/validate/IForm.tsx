import * as Yup from "yup";

export const FormSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  price: Yup.number().required("Price is required"),
  images: Yup.string().required("Images is required"),
});
