"use client";
import Link from "next/link";
import { IoAddSharp } from "react-icons/io5";
export default function AddButton() {
  return (
    <>
      <Link href={"/addNewTask"} className="text-white bg-red-500 rounded-[5px] hidden lg:inline-block px-3 py-1 text-[20px] uppercase ">
        Setup New Project
      </Link>
      <Link
        href={"/addNewTask"}
        className="w-[40px] h-[40px] bg-red-500 grid place-items-center rounded-[50%] fixed bottom-4 right-4 lg:hidden z-[9]"
      >
        <IoAddSharp size={24} className="text-white" />
      </Link>
    </>
  );
}
