import { createTheme, style } from "@vanilla-extract/css";

const [themeClass, vars] = createTheme({});

const headerStyle = style({
  padding: "24px",
});

const headerLogoStyle = style({});

const headerLogoSvg = style({
  fill: "var(--base-text-color)",
  width: "320px",
  height: "44px",
});

export { themeClass, headerStyle, headerLogoStyle, headerLogoSvg };
