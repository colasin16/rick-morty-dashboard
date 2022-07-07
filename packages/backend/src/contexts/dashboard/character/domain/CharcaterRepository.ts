import { Character } from "./Character";

export interface CharacterRepository {
  findManyByPage(page?: number): Promise<Array<Character>>;
}
