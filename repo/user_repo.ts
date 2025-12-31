import { eq } from "drizzle-orm";
import { getDB } from "root/test/main";
import { user } from "root/db/schema";

export class UserRepo {
  static async findByUsername(username: string) {
    const db = await getDB();
    const res = await db.select().from(user).where(eq(user.username, username));
    return res.length > 0;
  }

  static async findByEmail(email: string) {
    const db = await getDB();
    const res = await db.select().from(user).where(eq(user.email, email));
    return res.length > 0;
  }

  static async create(userData: any) {
    const db = await getDB();
    await db.insert(user).values(userData);
  }
}
