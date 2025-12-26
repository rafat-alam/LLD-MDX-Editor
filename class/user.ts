import { eq } from "drizzle-orm";
import { getDB } from "root/test/main";
import { user } from "root/db/schema";
import { v4 } from "uuid";

export class User {
  id: string;
  username: string;
  name: string;
  email: string;
  password: string;
  lastactive: Date;
  repo_id_list: string [];

  constructor(id: string, username: string, name: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.id = id;
    this.name = name;
    this.lastactive = new Date();
    this.repo_id_list = [];
    this.password = password;
  }

  static async find_by_email(email: string) : Promise<number> {
    let db = await getDB();
    const res = await db.select().from(user).where(eq(user.email, email));

    if(res.length == 0) return 200;
    return 400;
  }

  static async find_by_username(username: string) : Promise<number> {
    let db = await getDB();
    const res = await db.select().from(user).where(eq(user.username, username));

    if(res.length == 0) return 200;
    return 400;
  }

  static async add_user(username: string, name: string, email: string, password: string) {
    if(await User.find_by_username(username) == 400) {
      return;
    }
    if(await User.find_by_email(email) == 400) {
      return;
    }
    const id: string = v4();
    const temp = new User(id, username, name, email, password);

    let db = await getDB();
    await db.insert(user).values(temp);
  }
}