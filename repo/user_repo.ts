import { eq } from "drizzle-orm";
import { getDB } from "root/test/main";
import { user } from "root/db/schema";
import { User } from "root/entities/user";

export class UserRepo {
  static async find_by_username(username: string) {
    const db = await getDB();
    const res = await db.select().from(user).where(eq(user.username, username));
    return res.length > 0;
  }

  static async find_by_email(email: string) {
    const db = await getDB();
    const res = await db.select().from(user).where(eq(user.email, email));
    return res.length > 0;
  }

  static async create(user_data: User) {
    const db = await getDB();
    
    await db.insert(user).values({ 
      user_id: user_data.user_id,
      username: user_data.username,
      name: user_data.name,
      email: user_data.email,
      password_hash: user_data.password_hash,
      last_active: new Date()
    });
  }

  static async update_password(email: string, password_hash: string) {
    const db = await getDB();
    await db.update(user).set({ password_hash: password_hash }).where(eq(user.email, email));
  }
}
