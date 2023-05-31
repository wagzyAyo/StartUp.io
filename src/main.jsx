import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home";
import Jobs from "./routes/jobs";
import Career from "./routes/career";
import Profile from "./routes/profile";
import SignUp from "./routes/signup";
import Navbar from "./components/navbar"
import Login from "./routes/login"
import Recover from "./routes/recover"
import "./index.css"

const AppLayout = () => {
  return (
    <React.Fragment>
      <Navbar />

      <Outlet />


    </React.Fragment>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element:
          <Home />
        ,
      },
      {
        path: "jobs",
        element:
          <Jobs />
        ,
      },
      {
        path: "career",
        element:
          <Career />
        ,
      },
      {
        path: "profile",
        element:
          <Profile />
        ,
      },
      {
        path: "signup",
        element:
          <SignUp />
        ,

      },
      {
        path: "login",
        element:
          <Login />
        ,
      },
      {
        path: "recover",
        element:
          <Recover />
        ,
      },

    ]
  }

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);