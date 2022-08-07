import { themeClass, baseStyle } from "./loading.css.js";
import { motion } from "framer-motion";

export default function Loading({ isLoading }) {
  const o = isLoading ? 0 : 1;
  return (
    <motion.div
      className={`${themeClass} ${baseStyle}`}
      style={{ opacity: `${o}` }}
    >
      LOADING
    </motion.div>
  );
}
