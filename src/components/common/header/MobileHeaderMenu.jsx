import { IconButton } from "@mui/material";
import { BsArrowLeft } from "react-icons/bs";
import HeaderLinks from "./HeaderLinks";
import content from "@content/landing/headerContent";

function MobileHeaderMenu({ isOpen, setIsOpen }) {
  return (
    <div
      className={`absolute  bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-primary/20 top-0 left-0 h-screen w-full sm:w-1/2 lg:hidden transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="relative flex items-center justify-start pl-6 w-full h-18 border-b border-gray-200 dark:border-primary/20 ">
        <h1 className="text-slate-600 dark:text-gray-300">
          {content.menuTitle}
        </h1>
        <div className="absolute right-4 top-4 dark:text-white ">
          <IconButton onClick={() => setIsOpen(false)}>
            <BsArrowLeft className="dark:text-white" />
          </IconButton>
        </div>
      </div>
      <ul className="flex flex-col h-full gap-8 list-none text-md p-6">
        <HeaderLinks />
      </ul>
    </div>
  );
}

export default MobileHeaderMenu;
