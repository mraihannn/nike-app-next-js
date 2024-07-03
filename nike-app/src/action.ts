"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = () => {
  const cookie = cookies();
  cookie.delete("authorization");
  redirect("/login");
};
