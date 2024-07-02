import { Heart } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await fetch(`https://.../${slug}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default function DetailProduct({
  params,
}: {
  readonly params: { slug: string };
}) {
  return (
    <div>
      <div className="px-5">
        <h1 className="text-2xl text-black_nike font-medium">
          Nike Court Vision Low
        </h1>
        <h3 className="text-black_nike font-semibold">Mens Shoes</h3>
        <h3 className="my-5 font-semibold">Rp 1.069.000</h3>
      </div>
      <Image
        src={
          "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/d6c65e9a-a44e-4ea5-aa3f-96480653e803/nike-just-do-it.jpg"
        }
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
      </div>
    </div>
  );
}
