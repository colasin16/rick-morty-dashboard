import { LoginService } from "../../domain/LoginService";
import { LoginData } from "../../domain/LoginData";
import { User } from "../../../../_shared/domain/user/User";
import { HttpService } from "../../../../_shared/infrastructure/http/HttpService";

export class HttpLoginService extends HttpService implements LoginService {
  private readonly serviceDomain = "http://localhost:8080";

  async login(loginData: LoginData): Promise<{ user: User; token: string }> {
    return await this.fetch(`${this.serviceDomain}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
  }
}
