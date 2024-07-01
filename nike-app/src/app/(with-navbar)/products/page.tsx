import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal } from "lucide-react";

export default function Products() {
  return (
    <div>
      <h1 className="px-5 text-xl font-medium">Products Page</h1>
      <div className="flex p-5 gap-5 border-b-2 overflow-x-auto no-scrollbar">
        <h1 className="font-medium">Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
      </div>
      <div className="flex p-5 justify-between items-center">
        <h3 className="font-medium text-gray-500">555 Results</h3>
        <div className="flex gap-2 border-[1px] py-1 px-4 rounded-full items-center">
          <span className="font-medium">Filter</span>
          <SlidersHorizontal size={20} />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
