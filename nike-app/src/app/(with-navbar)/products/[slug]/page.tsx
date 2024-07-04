import { ProductType } from "@/db/models/product";
import { Heart } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props, // parent itu turunan dari metadata di root layout
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;
  const response = await fetch(`http:///localhost:3000/api/product/${slug}`);
  const product: ProductType = await response.json();

  // fetch data
  // const product = await fetch(`https://.../${slug}`).then((res) => res.json());
  //
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export default async function DetailProduct({
  params,
}: {
  readonly params: { slug: string };
}) {
  const response = await fetch(
    `http:///localhost:3000/api/product/${params.slug}`
  );
  const product: ProductType = await response.json();

  return (
    <div>
      <div className="px-5">
        <h1 className="text-2xl text-black_nike font-medium">{product.name}</h1>
        <h3 className="text-black_nike font-semibold">{product.excerpt}</h3>
        <h3 className="my-5 font-semibold">
          {product.price?.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          })}
        </h3>
      </div>
      <Image
        src={product.thumbnail}
        alt="cover"
        width={1000}
        height={1000}
        style={{ width: "100%" }}
      />
      <div className="p-5">
        <div className="flex justify-between px-5">
          <h4 className="font-semibold">Select Size</h4>
          <h4 className="font-semibold text-gray-500">Size Guide</h4>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="py-3 px-6 border-[2px] rounded-md hover:border-black">
            <span className="font-medium">EU 38.5</span>
          </div>
          <div className="py-3 px-6 border-[2px] rounded-md hover:border-black">
            <span className="font-medium">EU 38.5</span>
          </div>
          <div className="py-3 px-6 border-[2px] rounded-md hover:border-black">
            <span className="font-medium">EU 38.5</span>
          </div>
        </div>
        <div>
          <button className="flex mt-2 justify-center items-center gap-3 bg-black_nike w-full text-white p-3 px-6 rounded-full">
            Favourite <Heart size={18} />
          </button>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
