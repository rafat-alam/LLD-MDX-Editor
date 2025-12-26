class User {
  username: string;
  email: string;
  id: string;
  name: string;
  lastactive: Date;
  repolist: string [];

  constructor(username: string, email: string, id: string, name: string, lastactive: Date) {
    this.username = username;
    this.email = email;
    this.id = id;
    this.name = name;
    this.lastactive = lastactive;
    this.repolist = [];
  }
}