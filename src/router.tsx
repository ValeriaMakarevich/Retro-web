import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home/Home";
import Timeline from "./pages/Timeline/Timeline";
import { About } from "./pages/About/About";
import { Gallery } from "./pages/Gallery/Gallery";

import Year1983 from "./pages/Eras/Year1983/Year1983";
import Year1990 from "./pages/Eras/Year1990/Year1990";
import Year1993 from "./pages/Eras/Year1993/Year1993";
import Year1995 from "./pages/Eras/Year1995/1995Year";
import Year2004 from "./pages/Eras/Year2004/Year2004";
import Year2006 from "./pages/Eras/Year2006/Year2006";
import Year1969 from "./pages/Eras/Year1969/Year1969";

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
        path: "/eras/1969",
        element: <Year1969 />,
      },
      {
        path: "/eras/1983",
        element: <Year1983 />,
      },
      {
        path: "/eras/1990",
        element: <Year1990 />,
      },
      {
        path: "/eras/1993",
        element: <Year1993 />,
      },
      {
        path: "/eras/1995",
        element: <Year1995 />,
      },
      {
        path: "/eras/2004",
        element: <Year2004 />,
      },
      {
        path: "/eras/2006",
        element: <Year2006 />,
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
