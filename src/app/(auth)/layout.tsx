import React from "react";

export default function AuthLayout({ children }: { children: React.ReactElement }) {
  return (
    <div className="min-w-screen min-h-screen grid place-items-center">
      <div className="inner-box w-full">{children}</div>
    </div>
  );
}
