import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#41B3A3",
    },
    secondary: {
      main: "#E27D60",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      color: "#E27D60",
    },
    h2: {
      margin: 24,
      fontSize: "2rem",
      color: "#41B3A3",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
