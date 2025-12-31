import { randomBytes, scryptSync } from "crypto";

export class PasswordService {
  static hash(password: string): string {
    const salt = randomBytes(16).toString("hex");
    const hash = scryptSync(password, salt, 64).toString("hex");
    return `${salt}:${hash}`;
  }

  static verify(password: string, stored: string): boolean {
    const [salt, hash] = stored.split(":");
    const verifyHash = scryptSync(password, salt, 64).toString("hex");
    return hash === verifyHash;
  }
}
