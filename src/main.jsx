import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { NextUIProvider } from "@nextui-org/react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Charts } from "./pages/Charts.jsx";
import { Model } from "./pages/Model.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/Charts", element: <Charts /> },
  { path: "/Model", element: <Model /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
