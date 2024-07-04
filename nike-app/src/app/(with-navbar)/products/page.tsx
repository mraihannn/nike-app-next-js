"use client";

import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

type ProductType = {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>();
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/product", {
        cache: "no-cache",
      });
      const data = await response.json();
      setProducts(data);
    })();
  }, []);

  // const products = await fetchProducts();

  console.log(products);

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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {products?.map((p) => (
          <ProductCard key={p.slug} data={p} />
        ))}
      </div>
    </div>
  );
}
