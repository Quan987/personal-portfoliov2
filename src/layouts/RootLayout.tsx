import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

// interface LayoutProps {
//     children: ReactNode;
// }

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 2xl:px-70 2xl:pt-35">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
