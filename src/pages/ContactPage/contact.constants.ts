import xMark from "@assets/images/icons/x-mark.png";
import checkMark from "@assets/images/icons/check-mark.png";

export const STATUS_VARIANTS = {
  success: {
    title: "Submission Successful!",
    illustration: {
      image: checkMark,
      alt: "check-mark-alt",
    },
  },
  error: {
    title: "Submission Failed!",
    illustration: {
      image: xMark,
      alt: "x-mark-alt",
    },
  },
} as const;
