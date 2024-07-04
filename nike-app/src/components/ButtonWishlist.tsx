"use client";

import { addWishlist } from "@/action";
import { Heart } from "lucide-react";

export default function ButtonWishlist() {
  const productId = "123123";
  const userId = "123123";

  return (
    <button
      onClick={() => addWishlist(productId, userId)}
      className="flex mt-2 justify-center items-center gap-3 bg-black_nike w-full text-white p-3 px-6 rounded-full"
    >
      Add To Wishlist <Heart size={18} />
    </button>
  );
}
