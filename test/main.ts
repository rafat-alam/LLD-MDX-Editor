let _db: any;
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "root/db/schema";
import { AuthService } from "root/services/auth_service";
import { NodeService } from "root/services/node_service";

export function getDB() {
  if (!_db) {
    const pool = new Pool({ connectionString: 'postgresql://neondb_owner:npg_8iVjCApkFO7D@ep-dawn-thunder-ahtzrjt6-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require' });
    _db = drizzle(pool, { schema });
  }
  return _db;
}

async function main() {
  // console.log(await NodeService.add_folder("manga1", "1122", "1122"));
  // console.log(await NodeService.add_file("file1.ts", "", "1122", "31ab5786-153b-41b8-9055-13e38acc8109"));
  // console.log(await NodeService.add_file("file2.ts", "", "1122", "31ab5786-153b-41b8-9055-13e38acc8109"));
  // console.log(await NodeService.add_file("file3.ts", "", "1122", "31ab5786-153b-41b8-9055-13e38acc8109"));
  // console.log(await NodeService.add_folder("manga", "1122", "31ab5786-153b-41b8-9055-13e38acc8109"));
  console.log(await NodeService.get_repo("31ab5786-153b-41b8-9055-13e38acc8109"));
  // console.log(await NodeService.remove("31ab5786-153b-41b8-9055-13e38acc8109"));
  // await NodeService.rename("0b77e482-24c8-406f-b136-7301b1090348", "RAFAT");
}

main();