import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow flex items-center justify-center 2xl:px-60">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
