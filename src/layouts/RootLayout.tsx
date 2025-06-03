import Navbar from "@/components/Header";
import { ReactNode } from "react";
import Footer from "@/sections/Footer.tsx";
import Home from "@/sections/Home.tsx";
import About from "@/sections/About.tsx";
import Project from "@/sections/Project.tsx";
import Contact from "@/sections/Contact.tsx";
import { Outlet } from "react-router-dom";

// interface LayoutProps {
//     children: ReactNode;
// }

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="h-svh 2xl:px-60 2xl:pt-40">
        <Outlet />
      </main>
    </>
  );
}
