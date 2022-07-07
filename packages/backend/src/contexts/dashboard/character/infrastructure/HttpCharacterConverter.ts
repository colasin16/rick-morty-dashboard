import { Character } from "../domain/Character";
import { HttpCharacter } from "./HttpCharacter";
import { httpCharacterStatusConverter } from "./HttpCharacterStatus";

export class HttpCharacterConverter {
  static toDomain(httpCharacter: HttpCharacter): Character {
    return Character.fromPrimitives({
      id: httpCharacter.id,
      name: httpCharacter.name,
      status: httpCharacterStatusConverter.toDomain(httpCharacter.status),
      location: httpCharacter.location.name,
      origin: httpCharacter.origin.name,
      image: httpCharacter.image,
    });
  }

  static manyToDomain(mongoUsers: Array<HttpCharacter>): Array<Character> {
    return mongoUsers.map((mongoUser: HttpCharacter) => this.toDomain(mongoUser));
  }
}
