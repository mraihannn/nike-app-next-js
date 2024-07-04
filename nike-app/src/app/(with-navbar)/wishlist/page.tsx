"use client";

import ProductCard from "@/components/ProductCard";
import { WistListType } from "@/db/models/wishlist";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WistListType[]>();
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/wishlist");
      const data = await response.json();
      setWishlist(data);
    })();
  }, []);

  return (
    <div>
      <div className="flex mx-5 gap-2 border-[1px] p-2 bg-gray_nike rounded-full">
        <Search strokeWidth={1} />
        <input type="text" className="bg-transparent flex-1 outline-none" />
      </div>
      <h1 className="p-5 text-xl font-medium">Wishlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-3">
        {wishlist?.map((w) => (
          <ProductCard buttonWishlist={false} key={w._id} data={w.product} />
        ))}
      </div>
    </div>
  );
}
