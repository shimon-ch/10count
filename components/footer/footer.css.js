import { createTheme, style } from "@vanilla-extract/css";

const [themeClass, vars] = createTheme({});

const footerStyle = style({
  textAlign: "center",
  padding: "5rem",
});

export { themeClass, footerStyle };
