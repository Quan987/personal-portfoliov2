export function getRootStyleProperty(styleName: string = ""): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(styleName)
    .trim();
}

export function getElement<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(`Element with id "${id}" not found.`);
  }
  return el as T;
}

export function doesElementExist(id: string): boolean {
  return document.getElementById(id) !== null;
}
