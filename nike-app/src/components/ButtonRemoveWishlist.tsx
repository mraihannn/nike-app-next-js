"use client";
import { removeWishlist } from "@/action";

export default function ButtonRemoveWishlist({
  wistListId,
}: {
  readonly wistListId: string | undefined;
}) {
  return (
    <button
      className="bg-black text-white px-4 py-2 rounded-full"
      onClick={() => removeWishlist(wistListId)}
    >
      Remove
    </button>
  );
}
