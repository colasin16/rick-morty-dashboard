import { inject, injectable } from "inversify";
import { types } from "../../../../apps/dashboard/ioc/types";
import { Password } from "../../../_core/domain/Password";
import { Uuid } from "../../../_core/domain/Uuid";
import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

@injectable()
export class UserCreator {
  constructor(@inject(types.UserRepository) private repository: UserRepository) {}

  async create(username: string, rawPassword: string) {
    const user = new User(Uuid.random(), username, new Password(rawPassword));
    await this.repository.add(user);
  }
}
