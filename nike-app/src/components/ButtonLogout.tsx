"use client";
import { logout } from "@/action";
import { LogOutIcon } from "lucide-react";
import { MouseEventHandler } from "react";

export default function ButtonLogout() {
  return (
    <button onClick={logout}>
      <LogOutIcon strokeWidth={1} />
    </button>
  );
}
