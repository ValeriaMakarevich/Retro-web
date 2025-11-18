import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home/Home";
import Timeline from "./pages/Timeline/Timeline";
import { About } from "./pages/About/About";
import { Gallery } from "./pages/Gallery/Gallery";
import Eras from "./pages/Eras/ErasPages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/eras/:year",
        element: <Eras />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
