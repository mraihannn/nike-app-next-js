"use server";

import { User } from "@/db/models/user";
import { schemaUser } from "@/db/validation/user";
import { MongoServerError } from "mongodb";
import { redirect } from "next/navigation";
import { z } from "zod";

export default async function submit(formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const validateBody = await schemaUser.parseAsync(rawFormData);
    const user = await User.findByEmail(validateBody.email);
    if (!user) {
      throw new Error("Account not found");
    }
    console.log(user);
  } catch (error: any) {
    console.log(error);
    if (error instanceof z.ZodError) {
      redirect(`/login?error=${error.errors[0].message}`);
    } else if (error instanceof MongoServerError) {
      if (error.code === 11000)
        redirect(`/login?error=${encodeURIComponent("Email already exist")}`);
    }
    redirect(`/register`);
  }
  redirect("/");
}
