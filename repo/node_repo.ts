import { and, eq, InferSelectModel } from "drizzle-orm";
import { dir } from "root/db/schema";
import { _Node } from "root/entities/node";
import { getDB } from "root/test/main";

type Dir = InferSelectModel<typeof dir>;

export class NodeRepo {
  static async add_node(node: _Node): Promise<any> {
    const db = await getDB();
    await db.insert(dir).values(node);
  }

  static async get_list(id: string): Promise<Dir []> {
    const db = await getDB();
    const res: any [] = await db.select().from(dir).where(eq(dir.parent_id, id));

    return res;
  }

  static async rename(node_id: string, new_name: string): Promise<any> {
    const db = await getDB();
    await db.update(dir).set({ node_name : new_name }).where(eq(dir.node_id, node_id));
  }

  static async is_name_already_present(parent_id: string, new_name: string): Promise<boolean> {
    const db = await getDB();
    const res: any[] = await db.select().from(dir).where(and(eq(dir.parent_id, parent_id), eq(dir.node_name, new_name)));

    return res.length > 0;
  }

  static async remove_by_node_id(node_id: string) : Promise<Dir []> {
    const db = await getDB();
    await db.delete(dir).where(eq(dir.node_id, node_id));

    const res = await db.select().from(dir).where(eq(dir.parent_id, node_id));
    return res;
  }

  static async is_repo_present(node_id: string): Promise<boolean> {
    const db = await getDB();
    const res: any[] = await db.select().from(dir).where(and(eq(dir.node_id, node_id), eq(dir.parent_id, dir.owner_id)));

    return res.length == 0;
  }

  static async get_node(node_id: string): Promise<Dir> {
    const db = await getDB();
    const res: any[] = await db.select().from(dir).where(eq(dir.node_id, node_id));

    return res[0];
  }
}