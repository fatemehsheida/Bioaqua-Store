import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Kalameh, Vazir", // Changed to Kalameh font with Vazir as fallback
  },
  palette: {
    background: {
      default: "white", // Page background color
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#72B1A9", // Header background color
        },
      },
    },
  },
});

export default theme;
