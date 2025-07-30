import { HiOutlineBell } from "react-icons/hi2";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

import NotificationMsg from "./NotificationMsg";
import { useRef, useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { FormControlLabel, Switch } from "@mui/material";

function NotificationWindow({ notify }) {
  const [isOpenNotfi, setIsOpenNotfi] = useState(false);
  const notificationRef = useRef(null);
  useClickOutside(notificationRef, () => setIsOpenNotfi(false));

  return (
    <div className="relative" ref={notificationRef}>
      <button
        className={`icon-btn transition-shadow duration-150 ${
          isOpenNotfi && "shadow-lg shadow-black/30 "
        }`}
        onClick={() => setIsOpenNotfi(!isOpenNotfi)}
      >
        <HiOutlineBell size={25} />
        {notify && (
          <span
            className={`before:content-[''] absolute size-2 border-white bg-red-500 rounded-full right-2.5 top-3 ${
              isOpenNotfi ? "border" : "border-2"
            }`}
          ></span>
        )}
      </button>
      {isOpenNotfi && (
        <div className="absolute w-[340px] max-h-[400px] border border-gray-200 bg-white top-13 right-0 max-sm:-right-14 z-20 rounded-xl flex flex-col justify-between shadow-xl shadow-black/20 ">
          <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-md  text-slate-800 font-bold ">
              Notificaitons
            </h2>
            <button className="text-sm  text-blue-600 cursor-pointer flex items-center gap-2">
              View all
              <BsBoxArrowInUpRight />
            </button>
          </div>
          <div className="overflow-y-auto last:border-b-0">
            <NotificationMsg
              title={"Setup Your Profile"}
              body={"Complete your journey by settin up your profile..."}
              date={"15 Minutes ago"}
            />
            <NotificationMsg
              title={"Setup Your Profile"}
              body={"Complete your journey by settin up your profile..."}
              date={"15 Minutes ago"}
            />
            <NotificationMsg
              title={"Setup Your Profile"}
              body={"Complete your journey by settin up your profile..."}
              date={"15 Minutes ago"}
            />
            <NotificationMsg
              title={"Setup Your Profile"}
              body={"Complete your journey by settin up your profile..."}
              date={"15 Minutes ago"}
            />
          </div>
          <div className="flex justify-between items-center py-2 px-4 border-t border-gray-100">
            <button className="flex gap-2 items-center text-md cursor-pointer text-gray-700 hover:bg-slate-200 transition-colors duration-150 bg-slate-100 px-4 py-1 rounded-full text-sm">
              Mark all as read
              <IoCheckmarkDoneOutline color="blue" />
            </button>
            <div className="text-gray-600 text-sm">
              <FormControlLabel
                value="end"
                control={
                  <Switch
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#546fff",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "#546fff",
                        },
                    }}
                  />
                }
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "0.875rem",
                  },
                }}
                label="Don't Distrub"
                labelPlacement="start"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationWindow;
