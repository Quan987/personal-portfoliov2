import { getRootStyleProperty } from "@/utils/dom-utils";

/** Show an element by removing the 'hidden' class */
export function showElement(el: HTMLElement) {
  el.classList.remove("hidden");
}

/** Start fade-out animation on an element */
export function startFadeOut(
  el: HTMLElement,

  fadeInClass?: string | null
) {
  if (fadeInClass) {
    el.classList.remove(fadeInClass);
  }
  el.classList.add("animate-fade-out");
}

/** Finish fade-out animation and optionally remove splash element */
export function finishFadeOut(el: HTMLElement, isSplash: boolean) {
  el.classList.remove("animate-fade-out");
  el.style.animationDuration = getRootStyleProperty("--none");
  el.classList.add("hidden");
  if (isSplash) {
    el.remove();
  }
}
