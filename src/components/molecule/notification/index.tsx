"use client";

import { AlertContext } from "@/context/alertProvider";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";

export default function Notification() {
  const { open, message, variant, showNotification } = useContext(AlertContext);

  return (
    <div className={`fixed top-4 right-4 shadow p-2 ${variant} rounded-lg ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      <div className="grid grid-cols-9 gap-2 items-center ">
        <div className="col-span-8">
          <p className="text-white">{message || "Project Successfully updated"}</p>
        </div>
        <button
          className="col-span-1"
          onClick={() => {
            showNotification({
              open: false,
              message: "",
              variant: "success",
            });
          }}
        >
          <IoClose className="text-white" />
        </button>
      </div>
    </div>
  );
}
