export class Repo {
  id: string;
  reponame: string;
  name: string;
  list: [];
  last_updated: Date;
  author_username: string;

  constructor(id: string, reponame: string, name: string, author_username: string) {
    this.id = id;
    this.reponame = reponame;
    this.name = name;
    this.last_updated = new Date();
    this.author_username = author_username;
  }
}