import { auth } from "@/firebase/firebase";
import { gProvider } from "@/services/auth/providers";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

export const signup = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const loginWithGoogle = () => signInWithPopup(auth, gProvider);
export const loginWithGoogleRedirect = () =>
  signInWithRedirect(auth, gProvider);

export const resetPassword = (email) => sendPasswordResetEmail(auth, email);

export const logout = () => signOut(auth);
