import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";

export type ProductType = {
  _id?: string;
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
  static async findAll(search?: string): Promise<ProductType[]> {
    const collection = database.collection("Products");
    if (search) {
      const products = await collection
        .aggregate([
          {
            $match: {
              name: {
                $regex: new RegExp(search, "i"),
              },
            },
          },
        ])
        .toArray();
      return products;
    }
    const products = await collection.find().toArray();
    return products;
  }

  static async create(products: ProductType[]) {
    const collection = database.collection("Products");
    await collection.insertMany(products);
    // return products;
  }

  static async findById(_id: string) {
    const collection = database.collection("Products");
    const product = await collection.findOne({ _id: new ObjectId(_id) });
    return product;
  }
  static async findBySlug(slug: string) {
    const collection = database.collection("Products");
    const product = await collection.findOne({ slug });
    return product;
  }
}
