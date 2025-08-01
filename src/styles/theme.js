// theme.js
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#546fff",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#00c55b",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#f9f9f9",
        paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
        secondary: mode === "dark" ? "#cccccc" : "#555555",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& input": {
              color: mode === "dark" ? "#ffffff" : "#000000",
            },
            // لون الـ label
            "& label": {
              color: mode === "dark" ? "#aaaaaa" : "#555555",
            },
            // لون الخط تحت الحقل
            "& .MuiInput-underline:before": {
              borderBottomColor: mode === "dark" ? "#444" : "#ccc",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: mode === "dark" ? "#666" : "#888",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            backgroundColor: "var(--color-lowlight)",
            borderRadius: 12,
            padding: 8,
            transition: "background-color 0.3s",
            color: "var(--color-text)",
            "&:hover": {
              backgroundColor: "var(--color-lowlight-hover)",
            },
          },
        },
      },
    },
  });
