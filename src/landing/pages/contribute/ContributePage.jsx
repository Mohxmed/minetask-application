import StaticPagesLayout from "@layouts/StaticPagesLayout";
import contributeContent from "@content/landing/contributeContent";

const ContributePage = () => {
  return (
    <StaticPagesLayout
      title={contributeContent.title}
      subTitle={contributeContent.subtitle}
    >
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 text-gray-700">
        <div className="md:col-span-4">
          <div className="sticky top-25 space-y-6">
            <div className="bg-white dark:bg-slate-950 border border-primary/40 rounded-xl p-6 shadow-md ">
              <h3 className="text-xl font-semibold text-primary mb-3">
                {contributeContent.sections[3].title}
              </h3>
              <p className="text-base text-gray-600 dark:text-white mb-4">
                {contributeContent.sections[3].description}
              </p>
              <a
                href={contributeContent.sections[3].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary/90 transition"
              >
                {contributeContent.sections[3].buttonText}
              </a>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-white/20 border-l-4 border-primary p-4 rounded">
              <p className="text-sm text-gray-700 dark:text-white">
                MiniTask is built with love by the community. You’re welcome to
                shape its future!
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 space-y-8">
          {contributeContent.sections.slice(0, 3).map((section, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-950  border dark:border-primary/20 border-gray-200 rounded-xl shadow-sm p-6 transition hover:shadow-md"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">
                {section.title}
              </h2>

              {section.points && (
                <ul className="list-disc list-inside space-y-2 text-base leading-relaxed dark:text-white">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              {section.description && (
                <p className="text-base mt-2">{section.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </StaticPagesLayout>
  );
};

export default ContributePage;
