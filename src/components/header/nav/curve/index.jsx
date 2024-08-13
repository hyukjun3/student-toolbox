import styles from "./style.module.scss";
import { motion } from "framer-motion";

export default function Index() {
  const initialPath = `M0 0 L0 ${window.innerHeight} Q200 ${
    window.innerHeight / 2
  } 0 0`;
  const targetPath = `M0 0 L0 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 0 0`;

  const pathAnimation = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={pathAnimation}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
