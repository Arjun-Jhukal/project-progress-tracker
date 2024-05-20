import React from "react";

interface StatusProps {
  variant: string;
  status: string;
}
export default function StatusButton(props: StatusProps) {
  return <button className={`btn ${props.variant}`}>{props.status}</button>;
}
