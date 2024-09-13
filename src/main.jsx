import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import LoginForm from "./pages/login/Login";
import Info from "./pages/info/Info";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Dashboard from './pages/dashboard/Dashboard.jsx'
import "./main.css";
import Rides from "./pages/rides/Rides.jsx";
import ForgetPassword from "./pages/forgetPassword/forgetPassword.jsx";
import ResetPassword from "./pages/resetPassword/resetPassword.jsx";
import ReceivedRequests from "./pages/requests/ReceivedRequests.jsx";
import SentRequests from "./pages/requests/SentRequests.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/rides",
    element: <Rides />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />
  },
  {
    path: "/reset-password/:userId/:token",
    element: <ResetPassword />
  },
  {
    path: "/received-requests",
    element: <ReceivedRequests />
  },
  {
    path: "/sent-requests",
    element: <SentRequests />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
