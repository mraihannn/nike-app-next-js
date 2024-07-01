import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="w-[49%]">
      <Image
        src={
          "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/d6c65e9a-a44e-4ea5-aa3f-96480653e803/nike-just-do-it.jpg"
        }
        alt="cover"
        width={1000}
        height={1000}
        style={{ width: "100%" }}
      />
      <div className="p-3">
        <h3 className="text-black_nike font-semibold">Nike Court Vision Low</h3>
        <h3 className="text-gray-500 font-semibold">Men's Shoes</h3>
        <h3 className="text-gray-500 font-semibold">1 Colour</h3>
        <p className="mt-2 font-semibold">Rp 1.069.000</p>
      </div>
    </div>
  );
}
