function MainHeading({ children, second, className, center }) {
  return (
    <div
      className={`${
        center &&
        "w-full flex justify-center items-center flex-col mb-8 dark:text-white"
      }`}
    >
      <h1
        className={`relative text-3xl md:text-4xl text-center  z-10 font-bold w-max ${className}`}
      >
        {children}
        <span className="absolute bottom-2 -right-3 w-2 h-2 -z-1 bg-gradient-to-r from-primary to-blue-300 rounded-full transition-all duration-700 animate-expand-contract"></span>
      </h1>
      {second && <h2>{second}</h2>}
    </div>
  );
}

export default MainHeading;
