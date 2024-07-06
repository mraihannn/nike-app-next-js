"use client";
import { removeWishlist } from "@/action";
import { WistListType } from "@/db/models/wishlist";
import { Dispatch, SetStateAction } from "react";
import Swal from "sweetalert2";

export default function ButtonRemoveWishlist({
  wistListId,
  setWishlist,
}: {
  readonly wistListId: string | undefined;
  setWishlist: Dispatch<SetStateAction<WistListType[]>>;
}) {
  const handleRemove = async () => {
    await removeWishlist(wistListId);
    setWishlist((prevWishlist: WistListType[]) =>
      prevWishlist.filter((item) => item._id!.toString() !== wistListId)
    );
    Swal.fire({
      title: "Removed!",
      text: "Product removed from Wishlist!",
      icon: "error",
    });
    // router.refresh();
  };

  return (
    <button
      className="bg-black text-white px-4 py-2 rounded-full"
      onClick={() => handleRemove()}
    >
      Remove
    </button>
  );
}
