import Navbar from "@/components/Navbar.tsx";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className={""}>{children}</main>
      {/*<Footer/>*/}
    </>
  );
}
