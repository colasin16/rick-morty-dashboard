import { inject, injectable } from "inversify";
import { types } from "../../../../apps/dashboard/ioc/types";
import { CharacterRepository } from "../domain/CharcaterRepository";

@injectable()
export class CharacterFinder {
  constructor(@inject(types.CharacterRepository) private repository: CharacterRepository) {}

  async findManyByPage(page: number) {
    return await this.repository.findManyByPage(page);
  }
}
