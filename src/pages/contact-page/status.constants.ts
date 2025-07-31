import xMark from "@assets/images/icons/x-mark.png";
import checkMark from "@assets/images/icons/check-mark.png";

export const STATUS = {
  success: {
    id: "success",
    title: "Thank you for submitting!",
    illustration: {
      image: checkMark,
      alt: "check-mark-alt",
    },
  },
  error: {
    id: "error",
    title: "Oops! Something went wrong",
    illustration: {
      image: xMark,
      alt: "x-mark-alt",
    },
  },
} as const;
