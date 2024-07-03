import { Product } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(requst: NextRequest) {
  try {
    const product = await Product.findAll();
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}

export async function POST(requst: NextRequest) {
  try {
    const products = require("../../../../../db.json");
    // console.log(products.products);
    await Product.create(products.products);
    return NextResponse.json({ message: "Product created" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
