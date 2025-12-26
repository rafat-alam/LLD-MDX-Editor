let _db: any;
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { User } from "root/class/user";
import * as schema from "root/db/schema";

export function getDB() {
  if (!_db) {
    const pool = new Pool({ connectionString: 'postgresql://neondb_owner:npg_8iVjCApkFO7D@ep-dawn-thunder-ahtzrjt6-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require' });
    _db = drizzle(pool, { schema });
    main();
  }
  return _db;
}

function main() {
  User.add_user("rafat2", "rafat", "rafat@gmail.com", "1122");
}

getDB();