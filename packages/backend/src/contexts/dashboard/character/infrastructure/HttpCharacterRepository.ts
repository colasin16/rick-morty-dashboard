import { injectable } from "inversify";
import { HttpResponseHandler } from "../../../_core/infrastructure/HttpResponseHandler";
import { Character } from "../domain/Character";
import { CharacterRepository } from "../domain/CharcaterRepository";
import { HttpCharacterConverter } from "./HttpCharacterConverter";

@injectable()
export class HttpCharacterRepository implements CharacterRepository {
  private readonly domainRoot = "https://rickandmortyapi.com/api/";

  public async findManyByPage(page?: number): Promise<Character[]> {
    const pagination = page ? `/?page=${page}` : "";
    const response = await fetch(`${this.domainRoot}/character${pagination}`);
    const { results } = await HttpResponseHandler.handle(response);
    return HttpCharacterConverter.manyToDomain(results);
  }
}
