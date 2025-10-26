import * as bcrypt from "bcryptjs";
import { UserService } from "../users/services/user.service";
import { User } from "../users/entities/user.entity";
import { JWTService } from "./jwt.service";
import { PostSignUpReq } from "./schemas/request.schema";

export class AuthService {
  private readonly userService: UserService;
  private readonly jwtService: JWTService;

  constructor() {
    this.userService = new UserService();
    this.jwtService = new JWTService();
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 12;
    return bcrypt.hash(password, saltRounds);
  }

  async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  async signup(userData: PostSignUpReq): Promise<User> {
    // Check if user already exists
    const existingUser = await this.userService.findByEmail(userData.email);

    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // Hash password
    const hashedPassword = await this.hashPassword(userData.password);

    // Create user
    return this.userService.create({
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
    });
  }

  async login(email: string, password: string): Promise<{ user: User; token: string } | null> {
    // Find user by email
    const user = await this.userService.findByEmail(email);
    if (!user) {
      return null;
    }

    // Compare password
    const isPasswordValid = await this.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    // Generate JWT token
    const token = this.jwtService.generateToken({
      userId: user.id,
    });

    return { user, token };
  }
}
