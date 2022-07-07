import { hashSync, compareSync } from "bcrypt";

export class Password {
  private hash: string;

  constructor(rawPassword: string) {
    this.hash = this.encrypt(rawPassword);
  }

  static fromHash(hash: string) {
    const password = new Password("");
    password.hash = hash;
    return password;
  }

  private encrypt(rawPassword: string) {
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
