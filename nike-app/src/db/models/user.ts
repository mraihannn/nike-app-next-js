import { database } from "../config/mongodb";
import { hashPassword } from "@/helpers/bcrypt";
import { TUser } from "../validation/user";
import { ObjectId } from "mongodb";

export class User {
  static async create(user: TUser) {
    const collection = database.collection("Users");
    user.password = hashPassword(user.password);
    const { insertedId } = await collection.insertOne({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return insertedId;
  }

  static async findByEmail(email: string) {
    const collection = database.collection("Users");
    const selectedUser = await collection.findOne({ email });
    return selectedUser;
  }
}
