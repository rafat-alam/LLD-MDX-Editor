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
  // console.dir(await NodeService.get_repo("31ab5786-153b-41b8-9055-13e38acc8109"), { depth: null});
  // console.log(await NodeService.save("f7ba7b61-6aa1-4412-925f-f6ff88b5285d", "aaaa"));
  // console.log(await NodeService.remove("31ab5786-153b-41b8-9055-13e38acc8109"));
  // console.log(await NodeService.add_file("file2.ts", "", "1122", "f7ba7b61-6aa1-4412-925f-f6ff88b5285d"));
  // console.dir(await NodeService.get_repo_list("1122", "1122"), { depth: null});
  // console.log(await NodeService.set_repo_vis("31ab5786-153b-41b8-9055-13e38acc8109", "1122", true));
  // console.dir(await NodeService.get_folder_by_link(["manga1", "manga"], "1122", "123"), { depth: null })
  // console.log(await NodeService.user_repo_count('112'));
  // console.log(await NodeService.get_parent_id_by_link(["manga1", "fil1.ts"], "112", "112"));
  // await NodeService.rename("0b77e482-24c8-406f-b136-7301b1090348", "RAFAT");


  // console.log(await NodeService.add_repo("temp-repo", "1122"));
  // console.log(await NodeService.add_repo("temp-repo1", "1122"));
  // console.log(await NodeService.add_repo("temp-repo2", "1122"));

  // console.log(await NodeService.add_folder("folder1", "1122", "50466386-0b6f-4640-b43f-d314a6834eb3"));
  // console.log(await NodeService.add_folder("folder2", "1122", "7ee000ad-e395-4e89-aaa9-16287991d294"));
  // console.log(await NodeService.add_folder("folder3", "1122", "1122"));
  // console.log(await NodeService.add_folder("folder1", "1122", "7ee000ad-e395-4e89-aaa9-16287991d294"));

  // console.log(await NodeService.add_file("folder1.ts", "a", "1122", "50466386-0b6f-4640-b43f-d314a6834eb3"));
  // console.log(await NodeService.add_file("folder2.ts", "b", "1122", "7ee000ad-e395-4e89-aaa9-16287991d294"));
  // console.log(await NodeService.add_file("folder3.ts", "c", "1122", "29b773b8-5114-4502-9289-d4cfc0b10cf2"));
  // console.log(await NodeService.add_file("folder1.ts", "d", "1122", "7ee000ad-e395-4e89-aaa9-16287991d294"));

  // console.log(await NodeService.rename_repo("7ee000ad-e395-4e89-aaa9-16287991d294", "temp-repo", "1122"));
  // console.log(await NodeService.rename_repo("7ee000ad-e395-4e89-aaa9-16287991d294", "temp-repo3", "1122"));

  // console.log(await NodeService.rename("7ee000ad-e395-4e89-aaa9-16287991d294", "9bcf1f6c-1f02-496f-8f94-29f5d328cf7f", "file1.ts", "1122"));
  // console.log(await NodeService.rename("7ee000ad-e395-4e89-aaa9-16287991d294", "89068877-8cdb-47b4-8f65-21f09fcdb17b", "file2.ts", "1122"));
  // console.log(await NodeService.rename("7ee000ad-e395-4e89-aaa9-16287991d294", "89068877-8cdb-47b4-8f65-21f09fcdb17", "file2.ts", "1122"));
  // console.log(await NodeService.rename("7ee000ad-e395-4e89-aaa9-16287991d29", "89068877-8cdb-47b4-8f65-21f09fcdb17b", "file2.ts", "1122"));
  // console.log(await NodeService.rename("7ee000ad-e395-4e89-aaa9-16287991d294", "89068877-8cdb-47b4-8f65-21f09fcdb17b", "file2.ts", "1122"));
  // console.log(await NodeService.rename("50466386-0b6f-4640-b43f-d314a6834eb3", "1cda0e24-3623-43dd-aab7-112d485c9280", "file1.ts", "1122"));

  // console.log(await NodeService.save("9bcf1f6c-1f02-496f-8f94-29f5d328cf7f", "rafat", "1122"));
  // console.log(await NodeService.save("9bcf1f6c-1f02-496f-8f94-29f5d328cf7", "rafat", "1122"));

  // console.log(await NodeService.set_repo_vis("9fe52d11-f807-4f53-b209-f7199cef7f95", "1122", true));
  // console.log(await NodeService.set_repo_vis("9fe52d11-f807-4f53-b209-f7199cef7f9", "1122", true));
  // console.log(await NodeService.set_repo_vis("50466386-0b6f-4640-b43f-d314a6834eb3", "1122", true));

  // console.log(await NodeService.user_repo_count("1122"));
  // console.log(await NodeService.user_repo_count("112"));

  // console.dir(await NodeService.get_folder_by_link([], "1122", "1122"), { depth: null});
  // console.dir(await NodeService.get_folder_by_link([], "1122", "112"), { depth: null});
  
  // console.dir(await NodeService.get_folder_by_link(["temp-repo", "folder3.ts"], "1122", "1122"), { depth: null});
  // console.dir(await NodeService.get_folder_by_link(["temp-repo1"], "1122", "112"), { depth: null});
  
  // console.dir(await NodeService.get_folder_by_link(["temp-repo"], "1122", "1122"), { depth: null});
  // console.dir(await NodeService.get_folder_by_link(["temp-repo1", "file1.ts"], "1122", "112"), { depth: null});

  // console.log(await NodeService.remove("1cda0e24-3623-43dd-aab7-112d485c9280", "1122"));
  // console.log(await NodeService.remove("50466386-0b6f-4640-b43f-d314a6834eb3", "1122"));
  // console.log(await NodeService.remove("50466386-0b6f-4640-b43f-d314a6834eb", "1122"));
  // console.log(await NodeService.remove("7ee000ad-e395-4e89-aaa9-16287991d294", "1122"));
  // console.log(await NodeService.remove("f1ca13e2-0c9b-41ea-a752-0df1d4419a2f", "1122"));


  // console.log(await NodeService.add_repo("repo", "1122"));
  // console.log(await NodeService.add_folder("folder", "1122", "8d65a722-f045-401f-8cbc-943d9c009d8e"));
  // console.log(await NodeService.add_file("file", "a", "1122", "8d65a722-f045-401f-8cbc-943d9c009d8e"));
  // console.log(await NodeService.add_file("file2", "", "1122", "6b5bb60c-d046-4102-a430-39f767ba1a9c"));

  console.log(await NodeService.get_parent_id_by_link([], "1122", "1122"));
}

main();