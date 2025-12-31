import { randomInt } from "crypto";
import { sign } from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { User } from "root/entities/user";
import { UserRepo } from "root/repo/user_repo";
import { PasswordService } from "root/services/password_service";

interface Response {
  status: number;
  message: string;
}

export class AuthService {
  static async initSignup(username: string, name: string, email: string, password: string) : Promise<Response> {
    if (await UserRepo.findByUsername(username)) {
      return { status: 400, message: "Username already taken" };
    }

    if (await UserRepo.findByEmail(email)) {
      return { status: 400, message: "Email already used" };
    }

    const userId = uuidv4();
    const password_hash = PasswordService.hash(password);

    const temp_user = new User(userId, username, name, email, password_hash);

    const otp = randomInt(100000, 999999).toString();
    const otp_expiry = Date.now() + 10 * 60 * 1000;

    // send OTP here (email/sms)

    const payload = {
      temp_user,
      otp,
      otp_expiry,
    };

    let secret: string = process.env.JWT_SECRET ?? "rafat";
    const token = sign(payload, secret, {
      expiresIn: "10m",
    });

    return { status: 200, message: token };
  }
}
