import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LoadingIndicator from "@/components/ui/LoadingIndicator";
import { Outlet, useNavigation } from "react-router-dom";

export default function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <main className="grow flex items-center justify-center 2xl:px-60">
        {isLoading ? (
          <LoadingIndicator
            dotCount={3}
            stagger={120}
            className={isLoading ? "animate-fade-in" : "animate-fade-out"}
          />
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
}
