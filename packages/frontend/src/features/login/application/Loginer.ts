import { LoginData } from "../domain/LoginData";
import type { LoginService } from "../domain/LoginService";

export class Loginer {
  constructor(private service: LoginService) {}

  async login(loginData: LoginData) {
    return await this.service.login(loginData);
  }
}
