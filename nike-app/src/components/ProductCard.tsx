import { ProductType } from "@/db/models/product";
import Image from "next/image";

export default function ProductCard({
  width,
  data,
}: Readonly<{ width?: string; data: ProductType }>) {
  return (
    <div>
      <Image
        src={data.thumbnail}
        alt="cover"
        width={1000}
        height={1000}
        style={{ width: "100%" }}
      />
      <div className="p-3">
        <h3 className="text-black_nike font-semibold">{data.name}</h3>
        <h3 className="text-gray-500 font-semibold">{data.excerpt}</h3>
        {/* <h3 className="text-gray-500 font-semibold">1 Colour</h3> */}
        <p className="mt-2 font-semibold">
          {data.price?.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          })}
        </p>
      </div>
    </div>
  );
}
