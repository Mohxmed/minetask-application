import { database } from "@/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Users
export const saveUser = async (
  user,
  fName,
  lName,
  photoUrl = null,
  withGoogle = false,
  verfied
) => {
  if (!user || !user.uid) throw new Error("Invalid user");
  const userRef = doc(database, "users", user.uid);
  const data = {
    uid: user.uid,
    displayName: user.displayName || `${fName} ${lName}`,
    firstName: fName,
    lastName: lName,
    email: user.email,
    verfied: verfied,
    withGoogle: withGoogle,
    photoUrl: photoUrl,
    createdAt: new Date(),
  };
  try {
    await setDoc(userRef, data);
  } catch (err) {
    console.error("Error saving user to Firestore:", err.message);
    throw err;
  }
};

export async function getUserById(userId) {
  const userRef = doc(database, "users", userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return { ...userSnap.data() };
  } else {
    console.log("No such document!");
    return null;
  }
}
