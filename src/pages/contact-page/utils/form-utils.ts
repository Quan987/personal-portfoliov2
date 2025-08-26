function escapeHTML(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Escape `<`, `>`, `&`, `"`, and `'` characters in every string field of form input object.
 * @param data - An FormInput object containing user-provided string field.
 * @returns A new FormInput object with escaped HTML characters in all fields.
 */
export function sanitizeData<T extends Record<string, string>>(data: T): T {
  for (const [key, value] of Object.entries(data)) {
    data[key as keyof T] = escapeHTML(value) as T[keyof T];
  }
  return data as T;
}

export function getButtonLabel(
  isSubmitting: boolean,
  isSubmitSuccessful: boolean
): string {
  if (isSubmitting) return "Submitting...";
  if (isSubmitSuccessful) return "Resetting...";
  return "Send Message";
}
