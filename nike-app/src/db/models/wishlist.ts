import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";

type WistListType = {
  // _id?: string;
  userId: string;
  productId: string;
  // createdAt: string;
  // updatedAt: string;
};

export class Wishlist {
  static async findAll() {
    const collection = database.collection("Wishlist");
    const products = await collection.find().toArray();
    return products;
  }

  static async findById(id: string) {
    const collection = database.collection("Wishlist");
    const products = await collection.findOne({ _id: new ObjectId(id) });
    return products;
  }

  static async create(newWishlist: WistListType) {
    const collection = database.collection("Wishlist");
    const { insertedId } = await collection.insertOne({
      ...newWishlist,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return insertedId;
  }

  static async delete(id: string) {
    const collection = database.collection("Wishlist");
    await collection.deleteOne({
      _id: new ObjectId(id),
    });
  }
}
