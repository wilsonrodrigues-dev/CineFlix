import { createRoot } from "react-dom/client";
import "./index.scss";
import { router } from "./app.routes.jsx";
import { RouterProvider } from "react-router-dom";
import { HomeContextProvider } from "./Features/Home/home.context.jsx";
import { DetailsContextProvider } from "./Features/Details/details.context.jsx";
import { MovieContextProvider } from "./Features/Movies/movies.context.jsx";

createRoot(document.getElementById("root")).render(
  <MovieContextProvider>
    <DetailsContextProvider>
      <HomeContextProvider>
        <RouterProvider router={router} />
      </HomeContextProvider>
    </DetailsContextProvider>
  </MovieContextProvider>,
);
