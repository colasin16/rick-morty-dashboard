import { CharacterPrimitives } from "./CharacterPrimitives";
import { CharacterStatus } from "./CharacterStatus";

export class Character {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly status: CharacterStatus,
    public readonly location: string,
    public readonly origin: string,
    public readonly image: string
  ) {}

  static fromPrimitives(primitives: CharacterPrimitives): Character {
    const status = new CharacterStatus(primitives.status);
    return new Character(
      primitives.id,
      primitives.name,
      status,
      primitives.location,
      primitives.origin,
      primitives.image
    );
  }

  public toPrimitives(): CharacterPrimitives {
    return {
      id: this.id,
      name: this.name,
      status: this.status.value,
      location: this.location,
      origin: this.origin,
      image: this.image,
    };
  }
}
