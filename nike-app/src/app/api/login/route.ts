import { User } from "@/db/models/user";
import { schemaUser } from "@/db/validation/user";
import { verifyToken } from "@/helpers/token";
import { MongoServerError } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const validateBody = await schemaUser.parseAsync(body);
    const user = await User.findByEmail(validateBody.email);

    if (!user) {
      return NextResponse.json(
        { message: "Account not found" },
        {
          status: 401,
        }
      );
    }

    const access_token = verifyToken({ id: String(user._id) });

    return NextResponse.json({ access_token });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: error.errors[0].message,
        },
        { status: 400 }
      );
    } else if (error instanceof MongoServerError) {
      if (error.code === 11000)
        return NextResponse.json(
          {
            message: "Email already exist",
          },
          { status: 400 }
        );
    }
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
