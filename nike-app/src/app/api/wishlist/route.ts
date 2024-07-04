import { Wishlist } from "@/db/models/wishlist";
import { create } from "domain";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // const slug = request.nextUrl.pathname.split("/").pop();
  // const { userId } = await request.json();
  const userId = "6686c2e2613b496f2cff3868";
  try {
    const wishlist = await Wishlist.findAllByUserId(userId);
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

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  try {
    if (!id) {
      return NextResponse.json({ message: "id is required" }, { status: 400 });
    }

    const wishlist = await Wishlist.findById(id);
    console.log(wishlist);
    if (!wishlist) {
      return NextResponse.json(
        { message: "Wishlist not found" },
        { status: 400 }
      );
    }

    await Wishlist.delete(id);
    return NextResponse.json(
      { message: `Wishlist with id ${id} has been deleted` },
      { status: 202 }
    );
  } catch (error) {
    console.log(error);
    if ((error as Error).name === "BSONError") {
      return NextResponse.json({ message: "Invalid id" }, { status: 400 });
    }
    return NextResponse.json(
      { message: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
