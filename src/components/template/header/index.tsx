"use client";
import AddButton from "@/components/molecule/AddButton";
import { useNotification } from "@/context/alertProvider";
import { useAuth } from "@/context/authProvider";
import Image from "next/image";
import React from "react";

export default function Header() {
  const { token } = useAuth();
  const { showNotification } = useNotification();
  const { currentUser } = useAuth();

  console.log();
  return (
    <header className="header pt-2 shadow pb-2">
      <div className="container">
        <div className="grid grid-cols-6 items-center">
          <div className="col-span-6 lg:col-span-4">
            <div className="flex justify-start items-center w-full gap-2">
              {currentUser?.photoURL ? (
                <Image
                  src={currentUser.photoURL}
                  alt="Currently logged in user profile"
                  className="img-fluid max-w-[100%] h-auto rounded-[50%] object-cover"
                  width={50}
                  height={50}
                />
              ) : (
                ""
              )}
              <div className="content flex-flex-col">
                <h1>Hi, {currentUser?.displayName}</h1>
                <p>Your Daily Adventure starts now</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 flex justify-end">
            <AddButton />
          </div>
        </div>
      </div>
    </header>
  );
}
