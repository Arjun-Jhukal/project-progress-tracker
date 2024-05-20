"use client";

import { User } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useNotification } from "./alertProvider";

export const AuthContext = createContext<{ currentUser: User | null; token: string | null }>({
  currentUser: null,
  token: null,
});

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const { showNotification } = useNotification();

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(async (user) => {
      const token = await user?.getIdToken();
      if (!user || !token) {
        console.log("no user");
        setCurrentUser(null);
        setToken(null);
        if (pathname !== "/login") {
          router.replace("/login");
        }
      } else {
        setCurrentUser(user);
        setToken(token);
        showNotification({
          open: true,
          message: "Logged in successfully",
          variant: "success",
        });
        console.log(user);
      }
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ currentUser, token }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
