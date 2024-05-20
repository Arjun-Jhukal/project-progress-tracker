"use client";

import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../../../../firebase";
import { useRouter } from "next/navigation";
import { useNotification } from "@/context/alertProvider";
import { useAuth } from "@/context/authProvider";

export default function GoogleLoginAuth() {
  const router = useRouter();
  const { showNotification } = useNotification();
  const { token, currentUser } = useAuth();

  const signIn = async () => {
    try {
      signInWithPopup(auth, provider);

      if (token || currentUser) {
        router.replace("/");
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
