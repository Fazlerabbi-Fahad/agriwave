import FieldData from "../page/component-overview/fieldData/FieldData";
import Home from "../page/component-overview/home/Home";
import Login from "../page/component-overview/login/Login";
import Report from "../page/component-overview/report/Report";
import SignUp from "../page/component-overview/signup/SignUp";
import PrivateRoute from "../route/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Layout } = require("../layout/Layout");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/report",
        element: (
          <PrivateRoute>
            <Report />
          </PrivateRoute>
        ),
      },
      {
        path: "/fielddata",
        element: <FieldData />,
      },
    ],
  },
]);

export default routes;
