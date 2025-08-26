export function delay(delayMs: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delayMs));
}

export function toMilliseconds(value: string): number {
  if (value.endsWith("ms")) return parseFloat(value);
  if (value.endsWith("s")) return parseFloat(value) * 1000;
  return parseInt(value) || 0; // fallback
}
