import React, { Profiler, Suspense } from "react";
import ReactDOM from "react-dom/client";
import FallbackLoader from "./components/molecules/FallbackLoader/index.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LazyHomeTemplate } from "./utils/lazyComponents.js";
import HomePage from "./components/pages/HomePage/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyHomeTemplate />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/help",
        element: <div>Iam help</div>,
      },
      {
        path: "/search",
        element: <div>Iam Search</div>,
      },
      {
        path: "/offers",
        element: <div>Iam Offers</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <div>Render Login</div>,
  },
  {
    path: "/cart",
    element: <div>Render cart</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Profiler id="App">
      <Provider store={store}>
        <Suspense fallback={<FallbackLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </Profiler>
  </React.StrictMode>
);
