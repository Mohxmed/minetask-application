import NavHelpWidget from "./NavHelpWidget";
import { Link } from "react-router";

import { GoArrowLeft } from "react-icons/go";
import NavAllButtons from "./NavAllButtons";

export default function SideNavigation({ setMinimizeMenu, isMinimized }) {
  return (
    <div className="relative flex flex-col items-center justify-between h-full pb-4">
      <div className="w-full max-xl:sticky top-0">
        <div className="absolute -right-4 top-16 z-10">
          <button
            onClick={() => setMinimizeMenu(!isMinimized)}
            className={`${
              isMinimized && "rotate-180"
            } cursor-pointer transition-all duration-150 border bg-white text-slate-700 hover:bg-gray-200 border-gray-200 rounded-full size-8 flex items-center justify-center`}
          >
            <GoArrowLeft size={25} />
          </button>
        </div>
        <div className="border-b border-gray-200 h-20  flex items-center justify-center ">
          <Link to={"/"} className="flex items-center justify-center gap-1">
            <img
              className={`${isMinimized ? "size-10" : "size-7"} max-md:size-10`}
              src="../../src/assets/identity/minetask.png"
              alt="Minetask logo"
            />
            <p
              className={`${
                isMinimized && "hidden"
              } text-2xl font-medium text-slate-950 max-md:hidden`}
            >
              Mine
              <span className="font-bold">task</span>
            </p>
          </Link>
        </div>
        <div className="flex flex-col h-max px-2 py-8 gap-5 mb-3 max-md:px-2 ">
          <NavAllButtons isMinimized={isMinimized} />
        </div>
      </div>
      {!isMinimized && <NavHelpWidget />}
    </div>
  );
}
