import { vars } from "../theme.css.ts";
import { style } from "@vanilla-extract/css";

const sectionTitleStyle = style({
  fontSize: "1.8rem",
  fontWeight: "600",
  marginBottom: "2rem",
  textAlign: "center",
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
  letterSpacing: "0.1em",
});

const leadStyle = style([
  "flex justify-center",
  {
    fontSize: "1.7rem",
    fontWeight: 600,
    lineHeight: "1.4",
    padding: "4rem 0 3.75rem",
    "@media": {
      "screen and (min-width: 768px)": {
        fontSize: "3rem",
        padding: "6.5rem 0 6.25rem",
      },
    },
  },
]);

export { sectionTitleStyle, layerStyle, leadStyle };
