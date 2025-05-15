import { AppDataSource } from "../../../config/database";
import { User } from "../entities/user.entity";

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  async findAll() {
    return this.userRepository.find();
  }

  async findById(id: number) {
    return this.userRepository.findOneBy({ id });
  }
}
