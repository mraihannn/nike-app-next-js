import ProductCard from "@/components/ProductCard";
import { ProductType } from "@/db/models/product";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/product", {
    cache: "no-cache",
  });
  const data: ProductType[] = await response.json();
  return (
    <div>
      <div className="bg-gray_nike  py-3 text-center">
        <h1>Student Now Get 10% Off</h1>
      </div>
      <div className="px-5">
        <Image
          src={
            "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/d6c65e9a-a44e-4ea5-aa3f-96480653e803/nike-just-do-it.jpg"
          }
          alt="cover"
          width={1000}
          height={1000}
          style={{ width: "100%" }}
        />
        <h1 className="py-5 uppercase text-4xl font-extrabold">
          don't waste your energy
        </h1>
        <p className="py-5 font-medium">
          Run in Pegasus. Feel the responsive energy return of Air Zoom and
          All-new ReactX foam.
        </p>
        <button className="my-5 py-2 px-4 text-white bg-black rounded-full">
          Shop
        </button>
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium">Featured</h2>
          <Link href="/products" className="text-2xl font-medium">
            See all
          </Link>
        </div>
        <div className="flex ">
          {data?.slice(0, 4).map((p) => (
            <ProductCard width="500px" data={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
