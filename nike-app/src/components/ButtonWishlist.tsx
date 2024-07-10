"use client";

import { addWishlist } from "@/action";
import { Heart } from "lucide-react";
import Swal from "sweetalert2";

export default function ButtonWishlist({ productId }: { productId: string }) {
  const handleAddWishlist = async () => {
    const { id } = await addWishlist(productId);
    if (id) {
      Swal.fire({
        title: "Success!",
        text: "Product added to Wishlist!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please login first!",
        icon: "error",
      });
    }
  };

  return (
    <button
      onClick={() => handleAddWishlist()}
      className="flex mt-2 justify-center items-center gap-3 bg-black_nike w-full text-white p-3 px-6 rounded-full"
    >
      Add To Wishlist <Heart size={18} />
    </button>
  );
}
