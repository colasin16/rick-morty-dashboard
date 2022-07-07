import { ECharacterStatus } from "../domain/CharacterStatus";

export type HttpCharacterStatus = "Alive" | "Dead" | "unknown";

export class httpCharacterStatusConverter {
  static toDomain(status: HttpCharacterStatus) {
    const statusMap: Map<"Alive" | "Dead" | "unknown", ECharacterStatus> = new Map([
      ["Alive", ECharacterStatus.ALIVE],
      ["Dead", ECharacterStatus.DEAD],
      ["unknown", ECharacterStatus.UNKNOWN],
    ]);

    return statusMap.get(status) ?? ECharacterStatus.UNKNOWN;
  }
}
