import MainButton from "@/components/ui/buttons/MainButton";
import OutlineButton from "@/components/ui/buttons/OutlineButton";
import { useAuthContext } from "@/features/auth/context/AuthProvider";
import ProtectedRoute from "@/routes/ProtectedRoute";
import { Tooltip } from "@mui/material";
import { BsCheck2Circle, BsMailbox } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

const Profile = () => {
  const { userData } = useAuthContext();

  return (
    <ProtectedRoute>
      <div className=" bg-gray-100  dark:bg-gray-900">
        <div className="container min-h-screen w-full flex gap-6 justify-between text-gray-800 dark:text-white py-10 px-4">
          <div className="w-4/6 h-max bg-white dark:bg-gray-800 rounded-md shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
              <div className="flex-shrink-0">
                <img
                  className="h-32 w-32 rounded-full  object-cover"
                  src={userData?.photoUrl}
                  alt="Profile"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex gap-2 items-center">
                  <h1 className="text-3xl font-bold">
                    {userData?.displayName}
                  </h1>
                  {userData?.verfied && (
                    <Tooltip title="Verfied User">
                      <BsCheck2Circle size={20} className="text-primary" />
                    </Tooltip>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Full Stack Developer
                </p>

                <div className="mt-4 space-y-1 text-sm ">
                  <p className="flex gap-2 items-center">
                    <span className="text-primary">
                      <BsMailbox />
                    </span>
                    {userData?.email}
                  </p>
                  <p className="flex gap-2 items-center">
                    <span className="text-primary">
                      <SlLocationPin />
                    </span>
                    Cairo, Egypt
                  </p>
                </div>

                <div className="mt-6 flex justify-center md:justify-start gap-3">
                  <MainButton text={"Update Profile"} />
                  <OutlineButton text={"Preview"} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/6">
            <div className="bg-white"> some latest</div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;
