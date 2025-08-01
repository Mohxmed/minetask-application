import AuthProvider from "@features/auth/context/AuthProvider";
import useLocalStorage from "./hooks/useLocalStorage";
import { useLayoutEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { getTheme } from "@styles/theme";
import Router from "./router";

export default function App() {
  // Get Color Mode status before mount
  const [isDark] = useLocalStorage("darkMode", false);
  useLayoutEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ThemeProvider theme={getTheme(isDark ? "dark" : "light")}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}
