import { Uuid } from "../../../_core/domain/Uuid";

export class User {
  constructor(public readonly id: Uuid, private readonly name: string) {}
}
