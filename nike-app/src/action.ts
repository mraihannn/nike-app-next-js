"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = () => {
  const cookie = cookies();
  cookie.delete("authorization");
  redirect("/login");
};

export const addWishlist = async (productId: string, userId: string) => {
  await fetch("http://localhost:3000/api/wishlist", {
    body: JSON.stringify({ productId, userId }),
    method: "POST",
  });
};

export const removeWishlist = async (wistListId: string | undefined) => {
  await fetch("http://localhost:3000/api/wishlist", {
    body: JSON.stringify({ wistListId }),
    method: "DELETE",
  });
};
