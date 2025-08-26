import { doesElementExist, getRootStyleProperty } from "@/utils/dom-utils";
import { showElement, hideElementWithFade } from "@/utils/dom-animations";
import { useEffect, useMemo, useRef } from "react";
import { useNavigation } from "react-router-dom";
import { toMilliseconds } from "@/utils/time-utils";

export function useRouteLoadingIndicator(splashId = "splash-screen") {
  const { state } = useNavigation();
  const ref = useRef<HTMLDivElement | null>(null);

  const duration = useMemo(
    () => getRootStyleProperty("--route-loading-indicator-duration"),
    []
  );

  useEffect(() => {
    const el = ref.current;

    // return if one of these condition is true
    if (doesElementExist(splashId) || !el || !duration) return;

    if (state === "loading") {
      return showElement(el);
    }
    const timeout = setTimeout(() => {
      hideElementWithFade(el, duration);
    }, toMilliseconds(duration));

    return () => clearTimeout(timeout);
  }, [state, splashId]);

  return { ref };
}
