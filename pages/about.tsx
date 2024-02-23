import { motion } from "framer-motion";

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    About Pageです。
  </motion.div>
);

export default About;
