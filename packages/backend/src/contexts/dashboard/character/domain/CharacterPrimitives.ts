import { ECharacterStatus } from "./CharacterStatus";

export interface CharacterPrimitives {
  id: number;
  name: string;
  status: ECharacterStatus;
  location: string;
  origin: string;
  image: string;
}
