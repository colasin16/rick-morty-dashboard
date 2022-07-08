import { EnumValueObject } from "../../../_core/domain/value-object/EnumValueObject";

export enum ECharacterStatus {
  ALIVE = "alive",
  DEAD = "dead",
  UNKNOWN = "unknown",
}

export class CharacterStatus extends EnumValueObject<ECharacterStatus> {
  constructor(value: ECharacterStatus) {
    super(value, Object.values(ECharacterStatus));
  }

  protected throwErrorForInvalidValue(value: ECharacterStatus): void {
    throw new Error(`${value} is not a valid value for enum CharacterStatus`);
  }
}
