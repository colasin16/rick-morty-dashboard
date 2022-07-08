import { Character } from "./Character";

export interface CharacterService {
  fetchManyByPage(page?: number): Promise<Array<Character>>;
}
