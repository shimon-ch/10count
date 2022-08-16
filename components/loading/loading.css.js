import { vars } from "../../styles/theme.css.js";
import { keyframes, style } from "@vanilla-extract/css";

const baseStyle = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 100,
});

const loadingStyle = style({
  backgroundColor: vars.color.main,
  color: vars.color.base,
  fontFamily: vars.font.en,
  fontSize: "3.2rem",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  width: "100%",
  height: "100%",
  transition: "opacity .3s ease-out",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "5.6rem",
    },
  },
});

const noiseAnimation = keyframes({
  "0%": {
    clip: " rect(77px, 9999px, 6px, 0)",
  },
  "5%": {
    clip: " rect(65px, 9999px, 70px, 0)",
  },
  "10%": {
    clip: "rect(82px, 9999px, 82px, 0)",
  },
  "15%": {
    clip: "rect(32px, 9999px, 35px, 0)",
  },
  "20%": {
    clip: "rect(31px, 9999px, 49px, 0)",
  },
  "25%": {
    clip: "rect(18px, 9999px, 46px, 0)",
  },
  "30%": {
    clip: "rect(94px, 9999px, 64px, 0)",
  },
  "35%": {
    clip: "rect(69px, 9999px, 31px, 0)",
  },
  "40%": {
    clip: "rect(6px, 9999px, 72px, 0)",
  },
  "45%": {
    clip: "rect(25px, 9999px, 35px, 0)",
  },
  "50%": {
    clip: "rect(82px, 9999px, 26px, 0)",
  },
  "55%": {
    clip: "rect(7px, 9999px, 92px, 0)",
  },
  "60%": {
    clip: "rect(54px, 9999px, 30px, 0)",
  },
  "65%": {
    clip: "rect(86px, 9999px, 90px, 0)",
  },
  "70%": {
    clip: "rect(38px, 9999px, 65px, 0)",
  },
  "75%": {
    clip: "rect(41px, 9999px, 66px, 0)",
  },
  "80%": {
    clip: "rect(31px, 9999px, 37px, 0)",
  },
  "85%": {
    clip: "rect(8px, 9999px, 12px, 0)",
  },
  "90%": {
    clip: "rect(50px, 9999px, 69px, 0)",
  },
  "95%": {
    clip: "rect(7px, 9999px, 42px, 0)",
  },
  "100%": {
    clip: "rect(14px, 9999px, 57px, 0)",
  },
});

const noiseAnimation2 = keyframes({
  "0%": {
    clip: "rect(18px, 9999px, 13px, 0)",
  },
  "5%": {
    clip: "rect(74px, 9999px, 51px, 0)",
  },
  "10%": {
    clip: "rect(33px, 9999px, 65px, 0)",
  },
  "15%": {
    clip: "rect(64px, 9999px, 66px, 0)",
  },
  "20%": {
    clip: "rect(75px, 9999px, 6px, 0)",
  },
  "25%": {
    clip: "rect(40px, 9999px, 49px, 0)",
  },
  "30%": {
    clip: "rect(71px, 9999px, 1px, 0)",
  },
  "35%": {
    clip: "rect(42px, 9999px, 73px, 0)",
  },
  "40%": {
    clip: "rect(92px, 9999px, 57px, 0)",
  },
  "45%": {
    clip: "rect(4px, 9999px, 33px, 0)",
  },
  "50%": {
    clip: "rect(4px, 9999px, 34px, 0)",
  },
  "55%": {
    clip: "rect(49px, 9999px, 25px, 0)",
  },
  "60%": {
    clip: "rect(24px, 9999px, 44px, 0)",
  },
  "65%": {
    clip: "rect(31px, 9999px, 99px, 0)",
  },
  "70%": {
    clip: "rect(54px, 9999px, 83px, 0)",
  },
  "75%": {
    clip: "rect(57px, 9999px, 97px, 0)",
  },
  "80%": {
    clip: "rect(3px, 9999px, 15px, 0)",
  },
  "85%": {
    clip: "rect(84px, 9999px, 34px, 0)",
  },
  "90%": {
    clip: "rect(100px, 9999px, 88px, 0)",
  },
  "95%": {
    clip: "rect(91px, 9999px, 59px, 0)",
  },
  "100%": {
    clip: "rect(10px, 9999px, 87px, 0)",
  },
});

const layerStyle = style({
  backgroundColor: vars.color.main,
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  zIndex: "2",
});

const counterWrapperStyle = style({
  display: "flex",
  alignItems: "center",
  lineHeight: "1",
  position: "relative",
  ":after": {
    content: "attr(data-text)",
    position: "absolute",
    left: "2px",
    textShadow: "-1px 0 red",
    top: "0",
    color: vars.color.main,
    background: vars.color.base,
    overflow: "hidden",
    clip: "rect(0, 900px, 0, 0)",
    animation: `${noiseAnimation} .6s forwards linear alternate-reverse 4s`,
  },
  ":before": {
    content: "attr(data-text)",
    position: "absolute",
    left: "-2px",
    textShadow: "1px 0 blue",
    top: "0",
    color: vars.color.main,
    background: vars.color.base,
    overflow: "hidden",
    clip: "rect(0, 900px, 0, 0)",
    animation: `${noiseAnimation2} 1.6s forwards linear alternate-reverse 4s`,
  },
});

const counterFrameStyle = style({
  height: "1em",
  overflow: "hidden",
});

const counterStyle = style({
  display: "flex",
  flexDirection: "column",
});

export {
  baseStyle,
  loadingStyle,
  layerStyle,
  counterWrapperStyle,
  counterFrameStyle,
  counterStyle,
};
