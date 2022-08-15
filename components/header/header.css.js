import { vars } from "../../styles/theme.css.js";
import { style } from "@vanilla-extract/css";

const headerStyle = style({
  padding: "24px",
  display: "flex",
  justifyContent: "center",
  "@media": {
    "screen and (min-width: 768px)": {
      justifyContent: "flex-start",
    },
  },
});

const headerLogoStyle = style({});

const headerLogoSvg = style({
  fill: vars.color.main,
  width: "200px",
  height: "27px",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "320px",
      height: "44px",
      justifyContent: "flex-start",
    },
  },
});

export { headerStyle, headerLogoStyle, headerLogoSvg };
