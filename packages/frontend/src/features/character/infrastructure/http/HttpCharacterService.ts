import { ResponseHandler } from "../../../../_shared/infrastructure/http/ResponseHandler";
import { Character } from "../../domain/Character";
import { CharacterService } from "../../domain/CharacterService";

export class HttpCharacterService implements CharacterService {
  private readonly serviceDomain = "http://localhost:8080/characters";

  async fetchManyByPage(page?: number | undefined): Promise<Character[]> {
    const response = await fetch(`${this.serviceDomain}${page ? "/" + page : ""}`);

    return await ResponseHandler.handle(response);
  }
}
