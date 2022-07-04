import { Password } from "../../../_core/domain/Password";
import { Uuid } from "../../../_core/domain/Uuid";
import { UserPrimitives } from "./UserPrimitives";

export class User {
  constructor(
    public readonly id: Uuid,
    public readonly name: string,
    public readonly password: Password
  ) {}

  static fromPrimitives(primitives: UserPrimitives) {
    const password = new Password(primitives.password);
    return new User(new Uuid(primitives.id), primitives.name, password);
  }

  public toPrimitives() {
    return {
      id: this.id.toString(),
      name: this.name,
      password: this.password.toString(),
    };
  }
}
