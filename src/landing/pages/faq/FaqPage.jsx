import StaticPagesLayout from "@layouts/StaticPagesLayout";
import faqContent from "@/content/faqContent";
import { FaQuestion } from "react-icons/fa6";

const FaqPage = () => {
  return (
    <StaticPagesLayout title={faqContent.title} subTitle={faqContent.subtitle}>
      <section className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqContent.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-primary/20 rounded-lg p-6 overflow-hidden"
            >
              <h3 className="text-lg font-semibold uppercase text-primary flex items-center gap-6 mb-4">
                <div className="bg-primary/20  dark:bg-primary p-2 dark:text-white rounded-full">
                  <FaQuestion />
                </div>
                {faq.question}
              </h3>
              <div>
                <p className="relative pl-14 text-gray-700 dark:text-white mt-2 after:h-[200px] after:absolute after:w-0.5 after:bg-primary/5 after:left-4 after:-top-4 after:content-['']">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </StaticPagesLayout>
  );
};

export default FaqPage;
