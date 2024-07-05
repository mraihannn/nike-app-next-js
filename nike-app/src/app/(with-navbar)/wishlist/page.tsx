"use client";

import { getWishlist } from "@/action";
import ProductCard from "@/components/ProductCard";
import { WistListType } from "@/db/models/wishlist";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function WishlistPage() {
  //kalau versi client tidak perlu pasang cookies manual karena auto ngebaca yang di browser

  const [wishlist, setWishlist] = useState<WistListType[]>();
  useEffect(() => {
    (async () => {
      // const response = await fetch("http://localhost:3000/api/wishlist");
      // const data = await response.json();
      const data = await getWishlist();
      setWishlist(data);
    })();
  }, []);

  //versi server side
  // const response = await fetch("http://localhost:3000/api/wishlist",{
  //   headers:{
  //     Cookie:cookies().toString()
  //   }
  // });

  return (
    <div>
      <div className="flex mx-5 gap-2 border-[1px] p-2 bg-gray_nike rounded-full">
        <Search strokeWidth={1} />
        <input type="text" className="bg-transparent flex-1 outline-none" />
      </div>
      <h1 className="p-5 text-xl font-medium">Wishlist</h1>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
        {wishlist?.map((w) => (
          <ProductCard
            setWishlist={setWishlist}
            buttonWishlist={false}
            buttonRemoveWishlist={true}
            key={w._id}
            dataWishlist={w}
          />
        ))}
      </div>
    </div>
  );
}
