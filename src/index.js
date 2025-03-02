import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import Body from "./components/Body";
import Errorcomp from "./components/Errorcomp";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/comics",
        element: <Body />,
      },
      {
        path: "/news",
        element: <Body />,
      },
    ],
    errorElement: <Errorcomp />,
  },
]);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<RouterProvider router={appRouter} />);
