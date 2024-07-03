import Image from "next/image";
import submit from "./action";
import Link from "next/link";

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { error: string };
}) {
  return (
    <div className="p-10 w-fit mx-auto">
      <div className="flex items-center gap-3">
        <div className="w-10">
          <Image
            src="/nike.svg"
            alt="logo"
            width={0}
            height={0}
            style={{ width: "100%" }}
          />
        </div>
        <div className="w-10">
          <Image
            src="/jordan.jpeg"
            alt="logo"
            width={1000}
            height={0}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <h1 className="text-3xl py-5">
        Masukkan email Anda untuk mendaftar atau masuk.
      </h1>

      <form action={submit} className="flex flex-col gap-5">
        <p className="text-red-500">{searchParams?.error}</p>
        <input
          placeholder="email"
          type="text"
          name="email"
          className="border-[1px] border-black px-2 py-3 w-full rounded-lg"
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          className="border-[1px] border-black px-2 py-3 w-full rounded-lg"
        />

        <Link className="text-gray-600" href="/register">
          Dont have account? Register here
        </Link>

        <div className="text-end">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-full font-medium"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
