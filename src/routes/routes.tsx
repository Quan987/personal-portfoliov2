import { ComponentType } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout.tsx";
import ErrorPage from "@/pages/ErrorPage";

type LazyComponentPromise = Promise<ComponentType<{}>>;

export const routes = createBrowserRouter([
  {
    path: "/",
    id: "root",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        lazy: {
          Component: async (): LazyComponentPromise =>
            (await import("@/pages/HomePage")).Home,
        },
      },
      {
        path: "about",
        lazy: {
          Component: async (): LazyComponentPromise =>
            (await import("@/pages/AboutPage")).About,
        },
      },
      {
        path: "projects",
        lazy: {
          Component: async (): LazyComponentPromise =>
            (await import("@/pages/ProjectPage")).Project,
        },
      },
      {
        path: "contact",
        lazy: {
          Component: async (): LazyComponentPromise =>
            (await import("@/pages/ContactPage")).Contact,
        },
      },
    ],
  },
]);
