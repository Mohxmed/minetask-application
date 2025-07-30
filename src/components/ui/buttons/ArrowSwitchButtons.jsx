import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function ArrowSwitchButtons({
  handleLeftArrow,
  handleRightArrow,
  disableRight,
  disableLeft,
}) {
  return (
    <>
      <button
        onClick={handleLeftArrow}
        className={`w-8 h-8 rounded-lg bg-white cursor-pointer transition-colors duration-150 flex items-center justify-center hover:shadow-lg shadow shadow-black/10 ${
          disableLeft ? "cursor-not-allowed text-gray-300" : " text-primary "
        }`}
      >
        <SlArrowLeft size={20} />
      </button>
      <button
        onClick={handleRightArrow}
        className={`w-8 h-8 rounded-lg bg-white  cursor-pointer transition-colors duration-150 flex items-center justify-center hover:shadow-lg shadow shadow-black/10 ${
          disableRight ? "cursor-not-allowed text-gray-300" : " text-primary "
        }`}
      >
        <SlArrowRight size={20} />
      </button>
    </>
  );
}

export default ArrowSwitchButtons;
