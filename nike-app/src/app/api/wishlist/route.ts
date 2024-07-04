import { Wishlist } from "@/db/models/wishlist";
import { create } from "domain";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // const slug = request.nextUrl.pathname.split("/").pop();
  const body = request.json();
  try {
    const wishlist = await Wishlist.findAll();
    return NextResponse.json(wishlist);
  } catch (error) {
    console.log(error);
    if ((error as Error).name === "BSONError") {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  const { userId, productId } = await request.json();
  try {
    if (!productId) {
      return NextResponse.json(
        { message: "productId is required" },
        { status: 400 }
      );
    }
    if (!userId) {
      return NextResponse.json(
        { message: "userId is required" },
        { status: 400 }
      );
    }
    const wislistId = await Wishlist.create({ userId, productId });
    return NextResponse.json({ id: wislistId }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
