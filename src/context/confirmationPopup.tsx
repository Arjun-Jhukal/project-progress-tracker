"use client";
import React, { createContext } from "react";

interface ConfirmationContextType {
  openPopup: boolean;
  handlePopupChange: () => void;
}
export const ConfirmationContext = createContext<ConfirmationContextType>({
  openPopup: false,
  handlePopupChange: () => {},
});

export const ConfirmationContextProvider = ({ children }: { children: React.ReactElement }) => {
  const [openPopup, setOpenPopup] = React.useState(false);

  const handlePopupChange = () => {
    setOpenPopup((prev) => !prev);
  };

  // Render the context provider only if openPopup is true
  return <ConfirmationContext.Provider value={{ openPopup, handlePopupChange }}>{children}</ConfirmationContext.Provider>;
};

export default ConfirmationContextProvider;
