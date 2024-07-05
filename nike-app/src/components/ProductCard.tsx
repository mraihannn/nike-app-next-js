"use client";

import { ProductType } from "@/db/models/product";
import Image from "next/image";
import Link from "next/link";
import ButtonWishlist from "./ButtonWishlist";
import ButtonRemoveWishlist from "./ButtonRemoveWishlist";
import { WistListType } from "@/db/models/wishlist";

export default function ProductCard({
  width,
  data,
  dataWishlist,
  buttonWishlist,
  buttonRemoveWishlist,
  setWishlist,
}: Readonly<{
  setWishlist?: any;
  width?: string;
  data?: ProductType;
  dataWishlist?: WistListType;
  buttonWishlist: boolean;
  buttonRemoveWishlist: boolean;
}>) {
  return (
    <div>
      <Link href={`/products/${data?.slug || dataWishlist?.product?.slug}`}>
        <Image
          src={data?.thumbnail || dataWishlist?.product?.thumbnail}
          alt="cover"
          width={1000}
          height={1000}
          style={{ width: "100%" }}
        />
      </Link>

      <div className="p-3 flex flex-col justify-between">
        <div>
          <h3 className="text-black_nike font-semibold">
            {data?.name || dataWishlist?.product?.name}
          </h3>
          <h3 className="text-gray-500 font-semibold">
            {data?.excerpt || dataWishlist?.product?.excerpt}
          </h3>
          {/* <h3 className="text-gray-500 font-semibold">1 Colour</h3> */}
          <p className="mt-2 font-semibold">
            {(data?.price || dataWishlist?.product?.price)?.toLocaleString(
              "id-ID",
              {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }
            )}
          </p>
        </div>

        {buttonWishlist && <ButtonWishlist productId={data?._id!} />}
        {buttonRemoveWishlist && (
          <ButtonRemoveWishlist
            setWishlist={setWishlist}
            wistListId={dataWishlist?._id}
          />
        )}
      </div>
    </div>
  );
}
