import { vars } from "../../styles/theme.css.ts";
import {
  baseStyle,
  layerStyle,
  counterWrapperStyle,
  counterFrameStyle,
  counterStyle,
  loadingStyle,
} from "./loading.css.ts";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function Loading({ isLoading, changeState }) {
  const counterControl = useAnimationControls();
  const layerControl = useAnimationControls();
  const openingAnimation = useAnimationControls();
  const finishedAnimation = useAnimationControls();

  const openingAnimationSequence = async () => {
    await openingAnimation.start({
      backgroundColor: vars.color.base,
      color: vars.color.main,
      transition: {
        duration: 0.32,
        delay: 0.44,
      },
    });

    await layerControl.start({
      scaleX: 1,
      transition: {
        duration: 0.38,
        delay: 3.2,
        ease: [0.83, 0, 0.17, 1],
      },
    });

    return await finishedAnimation.start({
      scaleX: 0,
      originX: "left",
      transition: {
        duration: 0.45,
        delay: 0.2,
        ease: [0.83, 0, 0.17, 1],
      },
      transitionEnd: {
        display: "none",
      },
    });
  };

  useEffect(() => {
    counterControl
      .start({
        transform: "translateY(calc(-100% + 1em))",
        transition: {
          duration: 2.8,
          ease: [0.83, 0, 0.17, 1],
        },
      })
      .then(() => {
        return openingAnimationSequence();
      })
      .then(() => {
        changeState(true);
      });
  }, []);

  return (
    <motion.div className={`${baseStyle}`} animate={finishedAnimation}>
      <motion.div
        className={`${layerStyle}`}
        initial={{
          scaleX: 0,
          originX: "right",
        }}
        animate={layerControl}
      ></motion.div>
      <motion.div className={`${loadingStyle}`} animate={openingAnimation}>
        <div className={`${counterWrapperStyle}`} data-text="10COUNT">
          <div className={`${counterFrameStyle}`}>
            <motion.div className={`${counterStyle}`} animate={counterControl}>
              <div>0</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
            </motion.div>
          </div>
          <span>C</span>
          <span>O</span>
          <span>U</span>
          <span>N</span>
          <span>T</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
