import { Navigate, RouteObject } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout.tsx";
import Home from "@/pages/HomePage";
import About from "@/pages/AboutPage";
import Project from "@/pages/ProjectPage";
import Contact from "@/pages/ContactPage";
import NotFound from "@/pages/NotFoundPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    id: "root",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*", // for unmatched routes
    element: <NotFound />,
  },
];
