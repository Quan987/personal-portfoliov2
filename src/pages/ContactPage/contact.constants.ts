import xMark from "@assets/images/icons/x-mark.png";
import checkMark from "@assets/images/icons/check-mark.png";

export const CONTACT = {
  header: "Let's Connect",
  subheader1:
    "I'd love to hear from you — whether you have a question, want to collaborate on a project, or just want to say hello. Please take a moment to fill out the contact form, and I'll get back to you as soon as I can.",
  subheader2: "Looking forward to connecting!",
} as const;

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
