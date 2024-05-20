"use client";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();
  return (
    <div className="mb-4 pt-4 pb-2 border-b-[1px] border-gray-300 ">
      <button className="back__btn" onClick={() => router.back()}>
        <IoArrowBack />
      </button>
    </div>
  );
}
