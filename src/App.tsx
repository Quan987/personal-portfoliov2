// import "./App.css";
import { routes } from "@routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

// import { useEffect, useState } from "react";
//
//
// export default function App() {
//     const [isDark, setIsDark] = useState(
//         () => localStorage.getItem("theme") === "dark"
//     );
//
//     useEffect(() => {
//         const html = document.documentElement;
//         html.setAttribute("data-theme", isDark ? "dark" : "light");
//         localStorage.setItem("theme", isDark ? "dark" : "light");
//     }, [isDark]);
//
//     return (
//         <div className="min-h-screen flex items-center justify-center flex-col bg-background text-text transition-colors duration-1000">
//             <h1 className="text-text text-3xl font-bold mb-4">
//                 Tailwind v4 Dark Mode
//             </h1>
//             <button
//                 onClick={() => setIsDark((prev) => !prev)}
//                 className="px-4 py-2 rounded bg-primary text-white"
//             >
//                 Toggle {isDark ? "Light" : "Dark"} Mode
//             </button>
//         </div>
//     );
// }
