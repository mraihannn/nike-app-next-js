"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingBasket, User } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const router = usePathname();
  return (
    <div className="flex items-center justify-between bg-white p-5">
      <Link href="/">
        <div className="w-16">
          <Image
            src="/nike.svg"
            alt="logo"
            width={0}
            height={0}
            style={{ width: "100%" }}
          />
        </div>
      </Link>
      <div className="flex gap-3">
        {router !== "/wishlist" && <Search strokeWidth={1} />}

        <Link href="/products">
          <ShoppingBasket strokeWidth={1} />
        </Link>
        <Link href="/wishlist">
          <Heart strokeWidth={1} />
        </Link>
        <Link href="/login">
          <User strokeWidth={1} />
        </Link>
      </div>
      {/* <Link href="/login">
        <h1>Sign In</h1>
      </Link> */}
    </div>
  );
}
