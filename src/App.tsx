import { routes } from "@routes/routes";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

function App() {
  useEffect(() => {
    const splash = document.getElementById("splash-screen");
    if (!splash) return;

    // Start a 3-second delay before fading out splash
    const fadeTimeOut = setTimeout(() => {
      // Get fade out duration for splash
      const fadeOutDuration: number = parseFloat(
        getComputedStyle(splash).getPropertyValue("--splash-fade-duration")
      );

      // Add the fade-out class to trigger CSS transition
      splash.classList.add("fade-out");

      // Set another timer to remove the splash screen after fade duration (help synchronize fade out animation timing & removing splash from screen)
      const removeTimeOut = setTimeout(splash.remove, fadeOutDuration);

      // Cleanup inner timeout
      return () => clearTimeout(removeTimeOut);
    }, 3000);

    // Cleanup outer timeout
    return () => clearTimeout(fadeTimeOut);
  }, []);

  return <RouterProvider router={routes} />;
}

export default App;
