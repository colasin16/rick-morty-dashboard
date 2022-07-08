import { HttpService } from "../../../../_shared/infrastructure/http/HttpService";
import { Character } from "../../domain/Character";
import { CharacterService } from "../../domain/CharacterService";

export class HttpCharacterService extends HttpService implements CharacterService {
  private readonly serviceDomain = "http://localhost:8080/characters";

  async fetchManyByPage(page?: number | undefined): Promise<Character[]> {
    const { characters } = await this.fetch(`${this.serviceDomain}${page ? "/" + page : ""}`);
    return characters;
  }
}
