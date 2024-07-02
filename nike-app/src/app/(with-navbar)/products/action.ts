"use server";

import { Product } from "@/db/models/product";

export default async function fetchProducts() {
  try {
    const products = await Product.findAll();
    // console.log(products);
    return products;
  } catch (error) {
    console.log(error);
  }
}
