import { getElement, getRootStyleProperty } from "@/utils/dom-utils";
import { startFadeOut, finishFadeOut } from "@/utils/dom-animations";
import { useEffect, useRef } from "react";
import { toMilliseconds } from "@/utils/time-utils";

type UseSplashScreenOptions = {
  splashScreenId?: string;
  loadingBarId?: string;
};

export function useRemoveSplashScreen({
  splashScreenId = "splash-screen",
  loadingBarId = "loading-bar",
}: UseSplashScreenOptions = {}) {
  const splashFadeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const splashScreenEl = getElement<HTMLDivElement>(splashScreenId);
    const loadingBarEl = getElement<HTMLDivElement>(loadingBarId);

    const splashDurations = {
      none: getRootStyleProperty("--duration-none"),
      visible: getRootStyleProperty("--splash-visible-duration"),
      fade: getRootStyleProperty("--fade-duration"),
    };

    // Hide loading bar and start fade out after splash duration
    const splashVisibleTimeout = setTimeout(() => {
      loadingBarEl.style.animationDuration = splashDurations.none;
      startFadeOut(splashScreenEl, splashDurations.fade, "animate-fade-in");

      splashFadeTimeout.current = setTimeout(() => {
        finishFadeOut(splashScreenEl, true);
      }, toMilliseconds(splashDurations.fade));
    }, toMilliseconds(splashDurations.visible));

    return () => {
      clearTimeout(splashVisibleTimeout);
      if (splashFadeTimeout.current) clearTimeout(splashFadeTimeout.current);
    };
  }, [splashScreenId, loadingBarId]);
}
