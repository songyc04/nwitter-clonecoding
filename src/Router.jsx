import { createBrowserRouter } from "react-router-dom";

import Layout from "#components/Layout.jsx";
import Home from "#routes/Home.jsx";
import Profile from "#routes/Profile.jsx";
import Login from "#routes/Login.jsx";
import CreateAccount from "#routes/CreateAccount.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "profile",
        element: <Profile />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/create-account",
    element: <CreateAccount />
  }
]);

export default router;