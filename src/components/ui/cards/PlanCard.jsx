function PlanCard({ title, features, note, button, prefered = false }) {
  return (
    <div
      className={` shadow-md px-10 py-6 bg-white dark:bg-slate-950 dark:text-white ${
        prefered
          ? "border border-primary"
          : "border border-gray-200 dark:border-none"
      }`}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-200/90 space-y-1">
        {features.map((feat, i) => {
          return <li key={i}>{feat}</li>;
        })}
      </ul>
      <p className="text-xs text-primary mt-4">{note}</p>
      <div className="w-1/2 mt-8">{button && button()}</div>
    </div>
  );
}

export default PlanCard;
