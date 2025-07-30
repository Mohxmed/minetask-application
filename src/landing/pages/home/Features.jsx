import { motion } from "framer-motion";
import MainHeading from "@components/ui/typography/MainHeading";
import homeContent from "@/content/homeContent";
import FeatureCard from "@/components/ui/cards/FeatureCard";

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

function Features() {
  const cardStyle = "col-span-3 max-xl:col-span-6 max-md:col-span-12";

  return (
    <div className="pattern dark:bg-gray-950 py-16">
      <div className="container">
        <MainHeading center={true}>{homeContent.features.title}</MainHeading>

        <motion.div
          className="grid grid-cols-12 gap-4 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {homeContent.features.feature.map((feat, i) => (
            <motion.div
              key={feat.title}
              className={cardStyle}
              variants={cardVariants}
            >
              <FeatureCard
                color={i & 1 ? "blue" : "green"}
                title={feat.title}
                description={feat.description}
                icon={() => <feat.icon size={40} />}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Features;
