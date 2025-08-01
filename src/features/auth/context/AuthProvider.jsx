import LoadingPage from "@/components/ui/loading/LoadingPage";
import { auth } from "@/firebase/firebase";
import { getUserById } from "@/services/database/dbServices";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authIsReady, setAuthIsReady] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (user) {
        const userFromDB = await getUserById(user.uid);
        setUserData(userFromDB);
        console.log(user); // هنا خلاص القيمة اتحدثت فعليًا
        console.log(userFromDB); // هنا خلاص القيمة اتحدثت فعليًا
      } else {
        setUserData(null);
      }
      setAuthIsReady(true);
    });

    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider value={{ user, authIsReady, userData }}>
      {authIsReady ? children : <LoadingPage />}
    </authContext.Provider>
  );
}
export default AuthProvider;
export const useAuthContext = () => useContext(authContext);
