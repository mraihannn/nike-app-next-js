"use server";

import { User } from "@/db/models/user";
import { schemaUser } from "@/db/validation/user";
import { MongoServerError } from "mongodb";
import { redirect } from "next/navigation";
import { z } from "zod";

export default async function register(formData: FormData) {
  const rawFormData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const validateBody = await schemaUser.parseAsync(rawFormData);
    console.log(validateBody);
    await User.create(validateBody);
  } catch (error) {
    if (error instanceof z.ZodError) {
      redirect(`/register?error=${error.errors[0].message}`);
    } else if (error instanceof MongoServerError) {
      if (error.code === 11000)
        redirect(
          `/register?error=${encodeURIComponent("Email already exist")}`
        );
    }
    console.log(error);
  }
  redirect("/login");
}
