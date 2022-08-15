import { vars } from "../styles/theme.css.js";
import { style } from "@vanilla-extract/css";

const sectionTitleStyle = style({
  fontSize: "1.8rem",
  fontWeight: "600",
  marginBottom: "2rem",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "3rem",
      marginBottom: "3rem",
    },
  },
});

const layerStyle = style({
  backgroundColor: vars.color.base,
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
});

const leadStyle = style([
  "flex justify-center px-4 py-12 md:py-20",
  {
    fontSize: "1.8rem",
    fontWeight: 600,
    lineHeight: "1.4",
    "@media": {
      "screen and (min-width: 768px)": {
        fontSize: "3rem",
      },
    },
  },
]);

export { sectionTitleStyle, layerStyle, leadStyle };
