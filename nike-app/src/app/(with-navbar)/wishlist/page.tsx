import ProductCard from "@/components/ProductCard";
import { Search } from "lucide-react";

export default function WishlistPage() {
  return (
    <div>
      <div className="flex mx-5 gap-2 border-[1px] p-2 bg-gray_nike rounded-full">
        <Search strokeWidth={1} />
        <input type="text" className="bg-transparent flex-1 outline-none" />
      </div>
      <h1 className="p-5 text-xl font-medium">Wishlist</h1>
      <div className="flex flex-col">
        <ProductCard width="w-full" />
        <ProductCard width="w-full" />
      </div>
    </div>
  );
}
