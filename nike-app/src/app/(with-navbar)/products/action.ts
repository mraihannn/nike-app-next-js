"use server";

import { Product } from "@/db/models/product";

export default async function fetchProducts() {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    console.log(error);
  }
}
