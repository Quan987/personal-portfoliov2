import { JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout.tsx";
import ErrorPage from "@/pages/error-page";

type LazyComponentPromise = Promise<() => JSX.Element>;

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
            (await import("@/pages/home-page")).Home,
        },
      },
      {
        path: "about",
        lazy: {
          Component: async (): LazyComponentPromise =>
            (await import("@/pages/about-page")).About,
        },
      },
      {
        path: "projects",
        lazy: {
          Component: async (): LazyComponentPromise =>
            (await import("@/pages/project-page")).Project,
        },
      },
      {
        path: "contact",
        lazy: {
          Component: async (): LazyComponentPromise =>
            (await import("@/pages/contact-page")).Contact,
        },
      },
    ],
  },
]);
