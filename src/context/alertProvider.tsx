"use client";

import React, { createContext, useMemo, useState, useEffect, useContext } from "react";

type Variant = "success" | "error" | "warning";

interface NotificationProps {
  open: boolean;
  autoClose?: boolean;
  message: string;
  variant: Variant;
}

interface ContextValue extends NotificationProps {
  showNotification: (newNotification: Partial<NotificationProps>) => void;
}

export const AlertContext = createContext<ContextValue>({
  open: false,
  autoClose: false,
  message: "",
  variant: "success",
  showNotification: () => {},
});

export default function AlertProvider({ children }: Readonly<{ children: React.ReactElement }>) {
  const [notificationValue, setNotificationValue] = useState<NotificationProps>({
    open: false,
    message: "",
    variant: "success",
    autoClose: false,
  });

  const showNotification = (newNotification: Partial<NotificationProps>) => {
    setNotificationValue((prevState) => ({
      ...prevState,
      ...newNotification,
      open: true,
    }));
  };

  useEffect(() => {
    if (notificationValue.open && notificationValue.autoClose) {
      const timeoutId = setTimeout(() => {
        setNotificationValue((prevState) => ({
          ...prevState,
          open: false,
          message: "",
        }));
      }, 4500);

      return () => clearTimeout(timeoutId);
    }
  }, [notificationValue.open, notificationValue.autoClose]);

  const contextValue = useMemo(
    () => ({
      ...notificationValue,
      showNotification,
    }),
    [notificationValue, showNotification]
  );

  return <AlertContext.Provider value={contextValue}>{children}</AlertContext.Provider>;
}

export const useNotification = () => useContext(AlertContext);
