"use client";

import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../../../../firebase";
import { useNotification } from "@/context/alertProvider";
import { useAuth } from "@/context/authProvider";

export default function GoogleLoginAuth({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const { showNotification } = useNotification();
  const { token, currentUser } = useAuth();

  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);

      if (token || currentUser) {
        onLoginSuccess(); // Trigger the callback function passed from the parent component
      }
    } catch (e) {
      showNotification({
        open: true,
        autoClose: true,
        message: "Something went wrong try again later",
        variant: "error",
      });
    }
  };

  return (
    <button className="flex justify-center items-center gap-2 bg-gray-200 w-full py-1 mb-4 rounded-[5px]" onClick={signIn}>
      <FcGoogle />
      <span>Continue With Google</span>
    </button>
  );
}
