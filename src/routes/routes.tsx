import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout.tsx";
import ErrorPage from "@/pages/error-page";

import { JSX } from "react";

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
            (await import("@/pages/home-page")).default,
        },
      },
      {
        path: "about",
        lazy: {
          Component: async (): LazyComponentPromise =>
            (await import("@/pages/about-page")).default,
        },
      },
      {
        path: "projects",
        lazy: {
          Component: async (): LazyComponentPromise =>
            (await import("@/pages/project-page")).default,
        },
      },
      {
        path: "contact",
        lazy: {
          Component: async (): LazyComponentPromise =>
            (await import("@/pages/contact-page")).default,
        },
      },
    ],
  },
]);

// export const routes = createBrowserRouter([
//   {
//     path: "/",
//     id: "root",
//     errorElement: <ErrorPage />,
//     element: <RootLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       { path: "about", element: <About /> },
//       { path: "projects", element: <Project /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },
// ]);
