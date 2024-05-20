"use client";
import { ConfirmationContext } from "@/context/confirmationPopup";
import React, { useContext } from "react";

export default function ConfirmationPopup() {
  const { openPopup, handlePopupChange } = useContext(ConfirmationContext);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 grid place-items-center z-[11] ${
        openPopup ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="max-w-[400px] min-w-[350px] text-center px-6 py-8  bg-white rounded-lg">
        <p>All the form data will be lost.</p>
        <p>Are you sure you want to continue</p>
        <div className="flex justify-center items-center gap-2 mt-6">
          <button className="btn bg-red-500 hover:bg-red-400 disabled:cursor-not-allowed disabled:bg-red-400" onClick={handlePopupChange}>
            No
          </button>
          <button className="btn bg-green-500 hover:bg-green-300  disabled:cursor-not-allowed disabled:bg-green-400">Yes</button>
        </div>
      </div>
    </div>
  );
}
