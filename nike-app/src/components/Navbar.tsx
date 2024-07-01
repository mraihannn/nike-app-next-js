import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
      <div className="flex gap-2">
        <Link href="/products">
          <h1>Product</h1>
        </Link>
        <Link href="/wishlist">
          <h1>Wishlist</h1>
        </Link>
      </div>
      <Link href="/login">
        <h1>Sign In</h1>
      </Link>
    </div>
  );
}
