import { database } from "../config/mongodb";

type ProductType = {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export class Product {
  static async findAll(): Promise<ProductType[]> {
    const collection = database.collection("Users");
    const products = await collection.find().toArray();
    return products;
  }
}
