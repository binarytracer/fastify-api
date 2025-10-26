import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../../../config/database";

export class UserService {
  private readonly userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findById(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email });
  }

  async create(userData: Partial<User>) {
    const user = {
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return this.userRepository.save(user);
  }
}
