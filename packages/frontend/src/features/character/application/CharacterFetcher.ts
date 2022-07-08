import { CharacterService } from "../domain/CharacterService";

export class CharacterFetcher {
  constructor(private service: CharacterService) {}

  async fetch(page?: number) {
    return await this.service.fetchManyByPage(page);
  }
}
