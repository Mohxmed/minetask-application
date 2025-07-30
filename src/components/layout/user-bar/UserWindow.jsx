import { useRef, useState } from "react";
import { Link } from "react-router";
import { GoPerson, GoGear, GoBell, GoSignOut } from "react-icons/go";
import useClickOutside from "@hooks/useClickOutside";
import { logout } from "@/services/auth/authServices";
import noprofile from "@assets/user/noprofile.png";

function UserWindow({ imageURL, fullName, email, verfied = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const windowRef = useRef(null);
  useClickOutside(windowRef, () => setIsOpen(false));

  return (
    <div className="relative flex items-center" ref={windowRef}>
      <button className="rounded-full" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={imageURL ? imageURL : noprofile}
          className={`size-9 aspect-square rounded-full cursor-pointer shadow-black/30 transition-shadow duration-150 ${
            isOpen ? "shadow-lg" : "shadow-sm"
          } `}
        />
      </button>
      {isOpen && (
        <div className="absolute w-[300px] max-h-[400px] border border-gray-200 bg-white dark:bg-slate-950 dark:border-primary/20 top-12 -right-0 z-20 rounded-xl flex flex-col justify-between shadow-xl shadow-black/20">
          <div className="flex p-4 gap-4 items-center border-b pattern border-b-gray-100 dark:border-b-primary/20">
            <img
              src={imageURL ? imageURL : noprofile}
              className="size-18 rounded-full"
              alt="profile-picture"
            />
            <div>
              <p className="font-semibold dark:text-white">{fullName}</p>
              <p className="text-xs text-gray-400 dark:text-white">{email}</p>
              {verfied ? (
                <p className="bg-green-500 rounded-full text-center text-xs text-white w-max px-2 mt-2">
                  Verfied user
                </p>
              ) : (
                <p className="bg-red-500 rounded-full text-center text-xs text-white w-max px-2 mt-2">
                  Not verfied
                </p>
              )}
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2 py-6 user-links text-sm text-slate-800 dark:text-white transition-colors duration-150">
            <Link className="flex items-center gap-4 hover:bg-slate-800/10 p-2 rounded-md transition-colors duration-150">
              <GoPerson size={20} className="dark:text-gary-200" />
              Profile
            </Link>
            <Link className="flex items-center gap-4 hover:bg-slate-800/10 p-2 rounded-md transition-colors duration-150">
              <GoGear size={20} className="dark:text-gary-200" />
              Settings
            </Link>
            <Link className="flex items-center gap-4 hover:bg-slate-800/10 p-2 rounded-md transition-colors duration-150">
              <GoBell size={20} className="dark:text-gary-200" />
              Notifications
            </Link>
            <Link
              className="flex items-center gap-4 hover:bg-slate-800/10 p-2 rounded-md transition-colors duration-150"
              onClick={logout}
            >
              <GoSignOut size={20} className="dark:text-gary-200" />
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserWindow;
