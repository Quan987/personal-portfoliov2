import { Outlet, useNavigation } from "react-router-dom";
import { getRootStyleProperty } from "@/utils/dom-utils";
import RouteLoadingIndicator from "@/components/ui/RouteLoadingIndicator";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useMemo } from "react";
import { toMilliseconds } from "@/utils/time-utils";
import { useRemoveSplashScreen } from "@/hooks/useRemoveSplashScreen";

export default function RootLayout() {
  useRemoveSplashScreen();
  const loaderDot = useMemo(
    () => ({
      count: getRootStyleProperty("--loader-dot-count"),
      dotStagger: getRootStyleProperty("--loader-dot"),
    }),
    []
  );

  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative flex-center grow px-[clamp(1.25rem,calc(12.5vw_-_2rem),20rem)] py-[clamp(1rem,1vw,3rem)]">
        {isNavigating && (
          <RouteLoadingIndicator
            dotCount={parseInt(loaderDot.count)}
            stagger={toMilliseconds(loaderDot.dotStagger)}
            className=""
          />
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
