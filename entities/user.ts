export class User {
  id: string;
  username: string;
  name: string;
  email: string;
  hash_password: string;
  last_active: Date;
  reponame_list: string [];

  constructor(id: string, username: string, name: string, email: string, hash_password: string) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.email = email;
    this.hash_password = hash_password;
    this.last_active = new Date();
    this.reponame_list = [];
  }
}