import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  blockHeadless: true,
  limitRate: {
    id: "app",
    throttle: Number(import.meta.env.VITE_EMAILJS_THROTTLE_TIME),
  },
  origin: import.meta.env.VITE_EMAILJS_ORIGIN,
});

export default emailjs;
