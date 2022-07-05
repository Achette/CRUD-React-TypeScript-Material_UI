import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: purple[800],
      dark: purple[900],
      light: purple[700],
      contrastText: "#FFF",
    },
    secondary: {
      main: "#444251",
      dark: "#2F2E38",
      light: "#696773",
      contrastText: "#FFF",
    },
    background: {
      default: "#f7f6f3",
      paper: "#FFF",
    },
  },
});
