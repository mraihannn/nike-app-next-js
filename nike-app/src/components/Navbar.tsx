import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-around bg-[#F5F5F5] py-2">
      <Link href="/">
        <h1>Nike</h1>
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
