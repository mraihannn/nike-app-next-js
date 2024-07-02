import { database } from "../config/mongodb";

type WistListType = {
  _id: string;
  userId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
};

export class Product {
  static async findAll() {
    const collection = database.collection("Users");
    const products = await collection.find().toArray();
    return products;
  }
}
