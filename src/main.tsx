import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import rotuer from "./router.tsx";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={rotuer} />
  </Provider>
);
