import { getRootStyleProperty } from "@/utils/dom-utils";

/** Show an element by removing the 'hidden' class */
export function showElement(el: HTMLElement) {
  el.classList.remove("hidden");
}

/** Start fade-out animation on an element */
export function startFadeOut(
  el: HTMLElement,
  duration: string,
  fadeInClass?: string | null
) {
  if (fadeInClass) {
    el.classList.remove(fadeInClass);
  }
  el.classList.add("animate-fade-out");
  el.style.animationDuration = duration;
}

/** Finish fade-out animation and optionally remove splash element */
export function finishFadeOut(el: HTMLElement, isSplash: boolean) {
  el.classList.remove("animate-fade-out");
  el.style.animationDuration = getRootStyleProperty("--duration-none");
  el.classList.add("hidden");
  if (isSplash) {
    el.remove();
  }
}

/** Hide an element with fade-out animation */
export function hideElementWithFade(el: HTMLElement, duration: string) {
  startFadeOut(el, duration, null);

  const cleanup = () => {
    finishFadeOut(el, false);
    el.removeEventListener("animationend", cleanup);
  };
  el.addEventListener("animationend", cleanup);
}
