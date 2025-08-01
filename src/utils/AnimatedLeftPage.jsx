import { motion } from "framer-motion";

const pageTransition = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-20%", opacity: 0 },
  transition: {
    duration: 0.8,
    ease: "anticipate",
  },
};

const AnimatedLeftPage = ({ children }) => {
  return (
    <>
      <div className="fixed inset-0 pattern bg-primary dark:bg-slate-950/20 z-30"></div>
      <motion.div
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
        className="fixed top-0 left-0 w-full h-full z-40 bg-white overflow-auto"
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimatedLeftPage;
