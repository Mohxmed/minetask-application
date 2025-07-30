import ArrowSwitchButtons from "@components/ui/buttons/ArrowSwitchButtons";
import { motion, AnimatePresence } from "framer-motion";

// [...10] => 5 Steps > index (9)
function SnippetViewer({ title, data, children, setter, index, direction }) {
  const handleLeftArrow = () => {
    if (index <= 0) {
      return;
    }
    setter((prev) => prev - 2);
  };
  const handleRightArrow = () => {
    if (index >= data.length - 2) {
      return;
    }
    setter((prev) => prev + 2);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div>
      <div className="flex items-center justify-between mt-6 mb-4">
        <h2 className="text-2xl font-medium ">{title}</h2>
        <div className="flex items-center h-full gap-2">
          <ArrowSwitchButtons
            handleLeftArrow={handleLeftArrow}
            handleRightArrow={handleRightArrow}
            disableLeft={index <= 0}
            disableRight={index >= data.length - 2}
          />
        </div>
      </div>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.1 }}
          className="flex gap-4 justify-between max-lg:flex-col"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default SnippetViewer;
