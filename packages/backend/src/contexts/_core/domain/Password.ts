import { hashSync, compareSync } from "bcrypt";

export class Password {
  private readonly hash: string;

  constructor(rawPassword: string) {
    this.hash = this.encrypt(rawPassword);
  }

  encrypt(rawPassword: string) {
    const saltRounds = 10;
    return hashSync(rawPassword, saltRounds);
  }

  toString(): string {
    return this.hash;
  }

  matches(rawPassword: string) {
    return compareSync(rawPassword, this.hash);
  }
}
