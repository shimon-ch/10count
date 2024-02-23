import {
  createGlobalThemeContract,
  createGlobalTheme,
  globalStyle,
} from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
  color: {
    base: "color-base",
    main: "color-text",
  },
  font: {
    base: "font-base",
    en: "font-en",
  },
  fontSize: {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
  },
  fontWeight: {
    thin: "text-thin",
    light: "text-light",
    base: "text-base",
    semiBold: "text-semi-bold",
    bold: "text-bold",
  },
});

createGlobalTheme(":root", vars, {
  color: {
    base: "#1f1f1f",
    main: "#fff",
  },
  font: {
    base: "Noto Sans JP, sans-serif",
    en: "Anton, sans-serif",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.85rem",
    base: "1rem",
    md: "1.15rem",
    lg: "1.3rem",
    xl: "1.5rem",
  },
  fontWeight: {
    thin: "100",
    light: "300",
    base: "500",
    semiBold: "600",
    bold: "800",
  },
});

globalStyle("body", {
  backgroundColor: vars.color.base,
  color: vars.color.main,
  fontFamily: vars.font.base,
  fontFeatureSettings: '"palt"',
  fontWeight: vars.fontWeight.base,
});
