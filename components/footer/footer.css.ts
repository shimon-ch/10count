import { createTheme, style } from "@vanilla-extract/css";

const [themeClass, vars] = createTheme({});

const footerStyle = style({
  textAlign: "center",
  padding: "3rem",
});

export { themeClass, footerStyle };
