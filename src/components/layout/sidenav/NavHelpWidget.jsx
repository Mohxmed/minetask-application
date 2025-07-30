import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router";

export default function NavHelpWidget() {
  return (
    <div className="w-[calc(100%-20px)] relative mt-5 max-xl:hidden">
      <div className="z-10 absolute -top-5 right-[calc(50%-1.25rem)] size-10 border-2 border-white bg-black text-white flex items-center justify-center rounded-full shadow-lg shadow-white/20">
        <FaQuestion size={20} />
      </div>
      <div className="bg-black/95 w-full h-[220px] rounded-2xl flex flex-col justify-between px-2 py-4 items-center">
        <div className="absolute w-full h-full top-0 overflow-hidden before:content-[''] before:z-0 before:size-40 before:bg-white/10 before:rounded-full before:absolute before:-left-1/2 before:-top-1/3 after:content-[''] after:z-0 after:size-40 after:bg-white/10 after:rounded-full after:absolute after:-right-1/2 after:-bottom-1/3" />
        <div />
        <div className="flex flex-col items-center p-2 space-y-2 z-10">
          <h1 className="text-white font-medium">Help Center</h1>
          <p className="text-center text-xs text-white ">
            Having Trouble in Learning. Please contact us for more questions.
          </p>
        </div>
        <Link
          to="/help"
          className="text-slate-800 text-center bg-white p-2 w-4/5 rounded-lg text-xs font-bold cursor-pointer z-10"
        >
          Help Center
        </Link>
      </div>
    </div>
  );
}
