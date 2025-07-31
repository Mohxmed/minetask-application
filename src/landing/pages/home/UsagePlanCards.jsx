import PlanCard from "@/components/ui/cards/PlanCard";
import MainButton from "@components/ui/buttons/MainButton";
import OutlineButton from "@components/ui/buttons/OutlineButton";
import homeContent from "@content/landing/homeContent";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

function UsagePlanCard() {
  const [userPlan, guestPlan] = homeContent.start.plans;

  return (
    <motion.div
      className="grid md:grid-cols-2 gap-6 mt-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={cardVariants}>
        <PlanCard
          prefered={true}
          key={userPlan.title}
          title={userPlan.title}
          features={userPlan.features}
          note={userPlan.note}
          button={() => (
            <MainButton to={"/auth/register"} text={userPlan.buttonText} />
          )}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <PlanCard
          key={guestPlan.title}
          title={guestPlan.title}
          features={guestPlan.features}
          note={guestPlan.note}
          button={() => (
            <OutlineButton to={"/guest"} text={guestPlan.buttonText} />
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default UsagePlanCard;
