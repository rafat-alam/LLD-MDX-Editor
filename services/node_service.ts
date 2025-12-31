import { InferSelectModel } from "drizzle-orm";
import { dir } from "root/db/schema";
import { _Node } from "root/entities/node";
import { NodeRepo } from "root/repo/node_repo";
import { v4 } from "uuid";

type Dir = InferSelectModel<typeof dir>;

interface Response {
  status: number;
  message: string;
}

interface ResponseList {
  status: number;
  message: string;
  list: null | any;
}

export class NodeService {
  static async add_file(node_name: string, content: string, user_id: string, parent_id: string): Promise<Response> {
    try {
      if(await NodeRepo.is_name_already_present(parent_id, node_name)) {
        return { status: 400, message: "File or Folder with same name already Present!" };
      }

      const node_id = v4();
      const node = new _Node(node_id, node_name, "FILE", false, content, user_id, parent_id);
      await NodeRepo.add_node(node);
      return { status: 200, message: "File added successfully!" };
    } catch {
      return { status: 400, message: "INTERNAL SERVER ERROR!" };
    }
  }

  static async add_folder(node_name: string, user_id: string, parent_id: string): Promise<Response> {
    try {
      if(await NodeRepo.is_name_already_present(parent_id, node_name)) {
        return { status: 400, message: "File or Folder with same name already Present!" };
      }

      const node_id = v4();
      const node = new _Node(node_id, node_name, "FOLDER", false, null, user_id, parent_id);
      await NodeRepo.add_node(node);
      return { status: 200, message: "Folder added successfully!" };
    } catch {
      return { status: 400, message: "INTERNAL SERVER ERROR!" };
    }
  }

  static async get_repo(node_id: string): Promise<ResponseList> {
    try {
      if(await NodeRepo.is_repo_present(node_id = node_id)) {
        return { status: 400, message: "Repo not found!", list: null };
      }

      let res: Dir = await NodeRepo.get_node(node_id);

      return { status: 200, message: "OK!", list: {
          _id: res.node_id,
          name: res.node_name,
          checked: 0,
          isOpen: false,
          node_type: res.node_type,
          is_public: res.is_public,
          content: res.content,
          owner_id: res.owner_id,
          parent_id: res.parent_id,
          last_updated: res.last_updated,
          children: await this.get_repo_list(res.node_id),
        }
      };
    } catch {
      return { status: 400, message: "INTERNAL SERVER ERROR!", list: null };
    }
  }

  static async rename(parent_id: string, node_id: string, new_name: string): Promise<Response> {
    try {
      if(NodeRepo.is_name_already_present(parent_id, new_name)) {
        return { status: 400, message: "File or Folder with same name already Present!" };
      }

      await NodeRepo.rename(node_id, new_name);

      return { status: 200, message: "OK!" };
    } catch {
      return { status: 400, message: "INTERNAL SERVER ERROR!" };
    }
  }
  
  private static async get_repo_list(node_id: string) {
    const li: Dir [] = await NodeRepo.get_list(node_id);

    let res: any = [];

    for(const l of li) {
      let list: any = {
        _id: l.node_id,
        name: l.node_name,
        checked: 0,
        isOpen: false,
        node_type: l.node_type,
        is_public: l.is_public,
        content: l.content,
        owner_id: l.owner_id,
        parent_id: l.parent_id,
        last_updated: l.last_updated,
        children: await this.get_repo_list(l.node_id),
      };

      res.push(list);
    }

    return res;
  }

  static async remove(node_id: string): Promise<Response> {
    try {
      let list: string [] = [node_id];
      while(list.length) {
        let temp: string [] = [];
        for (const l of list) {
          let curr: Dir [] = await NodeRepo.remove_by_node_id(l);
          for (const e of curr) {
            temp.push(e.node_id);
          }
        }
        list = temp;
      }
      return { status: 200, message: "OK!" };
    } catch {
      return { status: 400, message: "INTERNAL SERVER ERROR!" };
    }
  }
}
