function FeatureCard({ icon, color, title, description }) {
  return (
    <div className="card-shadow flex flex-col gap-6 bg-white dark:bg-slate-900/60 dark:pattern rounded-2xl w-full min-h-52 p-8">
      <div
        className={`bg-gradient-to-r size-10 p-2 box-content rounded-full text-white shadow-xl mb-4 ${
          color == "green"
            ? "from-green-400 to-green-600 shadow-green-300 dark:shadow-green-800"
            : "from-blue-400 to-blue-700 shadow-blue-300 dark:shadow-blue-800"
        }`}
      >
        {icon()}
      </div>
      <div>
        <h1 className="font-bold text-xl dark:text-white">{title}</h1>
      </div>
      <div
        className={`w-1/2 rounded-2xl h-1 bg-gradient-to-l ${
          color == "green"
            ? "from-green-400  to-green-600"
            : "from-blue-400 to-blue-700 "
        }`}
      />
      <div className="text-gray-400 dark:text-gray-200">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
