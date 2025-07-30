import { createBrowserRouter, RouterProvider } from "react-router";
import AuthProvider from "@features/auth/context/AuthProvider";

// Routes
import LandingRoutes from "@routes/LandingRoutes";
import AuthRoutes from "@routes/AuthRoutes";
import AppRoutes from "@routes/AppRoutes";
import UserRoutes from "@routes/UserRoutes";
import useLocalStorage from "./hooks/useLocalStorage";
import { useLayoutEffect } from "react";

const router = createBrowserRouter([
  LandingRoutes,
  AuthRoutes,
  UserRoutes,
  AppRoutes,
]);

export default function App() {
  // Get Color Mode status before mount
  const [isDark] = useLocalStorage("darkMode", false);
  useLayoutEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
