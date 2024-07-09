// src/theme.ts
import { createTheme } from "@mui/material/styles";

// Оголошення типів для теми
declare module "@mui/material/styles" {
  interface Theme {
    // Ваші власні кольори та властивості теми
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    // Ваші власні кольори та властивості теми
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    // Інші налаштування типографії
  },
  // Інші властивості теми
});

export default theme;
