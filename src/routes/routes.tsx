import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout.tsx";
import ErrorPage from "@/pages/error-page";
import Home from "@/pages/home-page";
import About from "@/pages/about-page";
import Project from "@/pages/project-page";
import Contact from "@/pages/contact-page";


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


