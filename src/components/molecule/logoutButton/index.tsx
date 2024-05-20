"use client";

import { signOut } from "firebase/auth";
import { CiLogout } from "react-icons/ci";
import { auth } from "../../../../firebase";
export default function LogoutButton() {
  const logOut = () => {
    signOut(auth);
  };
  return (
    <button
      type="button"
      onClick={logOut}
      className="fixed left-8 bottom-4 w-[40px] h-[40px] bg-red-500 grid place-items-center text-white rounded-[50%]"
    >
      <CiLogout />
    </button>
  );
}
