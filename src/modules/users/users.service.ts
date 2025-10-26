import { AppDataSource } from "../../config/database";
import { User } from "./entities/user.entity";

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: User["id"]): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async create(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create({
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return this.userRepository.save(user);
  }

  async update(id: number, userData: Partial<User>): Promise<User | null> {
    await this.userRepository.update(id, {
      ...userData,
      updatedAt: new Date(),
    });
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
