import StaticPagesLayout from "@layouts/StaticPagesLayout";
import aboutContent from "@/content/landing/aboutContent";
import { FaLaptopCode, FaRegStar } from "react-icons/fa";
import { TbMoodCrazyHappy } from "react-icons/tb";

const AboutPage = () => {
  const {
    title,
    subTitle,
    description,
    whyTitle,
    whyPoints,
    whoTitle,
    whoPoints,
    developerTitle,
    developerInfo,
    closingNote,
  } = aboutContent;

  const headingClass =
    "text-xl font-semibold text-primary mb-4 pb-2 mt-6 border-b dark:border-primary/20 border-gray-100 text-shadow-xs flex items-center gap-2";
  const paragraphClass = "mb-4";

  return (
    <StaticPagesLayout title={title} subTitle={subTitle}>
      <div className="text-lg border-l-3 border-primary pl-4">
        {description}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <h3 className={headingClass}>
            <FaRegStar />
            {whyTitle}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {whyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>
            <TbMoodCrazyHappy />
            {whoTitle}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {whoPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className={headingClass}>
          <FaLaptopCode />
          {developerTitle}
        </h3>
        <p className={paragraphClass}>
          <strong>{developerInfo.name}</strong>, {developerInfo.role}
        </p>
        {developerInfo.story.map((paragraph, index) => (
          <p key={index} className={paragraphClass}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="italic text-gray-600 dark:text-white pt-4 border-t border-gray-100 dark:border-primary/20">
        {closingNote.text}
        <br />
        <span className="text-primary font-semibold border-l-3 border-primary pl-2">
          {closingNote.highlight}
        </span>
      </div>
    </StaticPagesLayout>
  );
};

export default AboutPage;
