import { createBrowserRouter } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import FormAdd from "./pages/FormAdd";
import FormEdit from "./pages/FormEdit";
import Counter from "./pages/Counter";

const rotuer = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "/formAdd",
    element: <FormAdd />,
  },
  {
    path: "/formEdit/:id",
    element: <FormEdit />,
  },
  {
    path: "/Counter",
    element: <Counter />,
  },
]);

export default rotuer;
