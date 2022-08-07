import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  font: {
    color: "#000",
  },
});

export const baseStyle = style({
  backgroundColor: "#fff",
  color: vars.font.color,
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  transition: "opacity .3s ease-out",
});
