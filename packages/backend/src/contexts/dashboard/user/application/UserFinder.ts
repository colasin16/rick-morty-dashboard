import assert from "assert";
import { inject, injectable } from "inversify";
import { types } from "../../../../apps/dashboard/ioc/types";
import { UnknownUserError } from "../domain/errors/UnknownUserError";
import { UserRepository } from "../domain/UserRepository";

@injectable()
export class UserFinder {
  constructor(@inject(types.UserRepository) private repository: UserRepository) {}

  async findByUsername(username: string) {
    const user = await this.repository.findByUsername(username);
    assert(user, new UnknownUserError(user?.id.toString()));
    return user;
  }
}
