import { Navigate, RouteObject } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout.tsx";
import Home from "@/sections/Home.tsx";
import About from "@/sections/About.tsx";
import Project from "@/sections/Project.tsx";
import Contact from "@/sections/Contact.tsx";
import NotFound from "@/pages/NotFound.tsx";

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
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
