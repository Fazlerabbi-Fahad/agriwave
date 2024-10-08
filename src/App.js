import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./route/Route";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
