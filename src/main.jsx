import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginForm from "./login.jsx";
import SignupForm from "./signup.jsx";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./index.jsx";
import ErrorPage from "./error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LoginForm />,
      },
      {
        path: "signup",
        element: <SignupForm />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
