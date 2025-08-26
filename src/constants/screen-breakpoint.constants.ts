export const BREAKPOINT = {
  XS: 360, // mobile
  SM: 640, // mobile landscape
  MD: 768, // tablet
  LG: 1024, // small laptop/tablet landscape
  XL: 1280, // desktop
  "2XL": 1536, // wide desktop
  "3XL": 1920, // HD screen
  "4XL": 2560, // 4K screen
} as const;

export type BreakpointKey = keyof typeof BREAKPOINT;
