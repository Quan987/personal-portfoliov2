import { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LoadingIndicator from "@/components/ui/LoadingIndicator";

export default function RootLayout() {
  const { state } = useNavigation();
  const [isShowingLoader, setIsShowingLoader] = useState(false);

  useEffect(() => {
    if (state === "loading") {
      setIsShowingLoader(true);
    } else {
      const timeout = setTimeout(() => setIsShowingLoader(false), 1000); // Delay to allow fade-out animation to play
      return () => clearTimeout(timeout);
    }
  }, [state]);

  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <main className="grow flex items-center justify-center 2xl:px-60">
        {isShowingLoader ? (
          <LoadingIndicator
            dotCount={3}
            stagger={120}
            className={
              state === "loading" ? "animate-fade-in" : "animate-fade-out"
            }
          />
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
}
