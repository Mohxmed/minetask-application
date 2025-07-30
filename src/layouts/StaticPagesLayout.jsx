function StaticPagesLayout({ title, subTitle, children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black/50 pattern">
      <div className="w-full h-[300px] pattern-2 bg-primary dark:bg-primary/50 dark:from-blue-800/50 dark:to-green-800/50 flex justify-center gap-3 items-start pt-18">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white  text-shadow-sm">
            {title}
          </h1>
          <p className="text-gray-200  font-light">{subTitle}</p>
        </div>
      </div>
      <div className="container py-6 -mt-35">
        <section className="space-y-4 text-gray-700 bg-white dark:bg-slate-950 dark:text-gray-300 p-12 max-sm:p-6 shadow rounded-sm">
          {children}
        </section>
      </div>
    </div>
  );
}

export default StaticPagesLayout;
