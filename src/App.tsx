import { routes } from "@routes/routes";
import { RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
