"use client";
import { removeWishlist } from "@/action";
import { WistListType } from "@/db/models/wishlist";
import { useRouter } from "next/navigation";

export default function ButtonRemoveWishlist({
  wistListId,
  setWishlist,
}: {
  readonly wistListId: string | undefined;
  setWishlist: any;
}) {
  const router = useRouter();

  const handleRemove = async () => {
    await removeWishlist(wistListId);
    setWishlist((prevWishlist: WistListType[]) =>
      prevWishlist.filter((item) => item._id!.toString() !== wistListId)
    );

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
