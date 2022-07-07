import { LoginService } from "../../domain/LoginService";
import { LoginData } from "../../domain/LoginData";
import { User } from "../../../../_shared/domain/user/User";
import { ResponseHandler } from "../../../../_shared/infrastructure/http/ResponseHandler";

export class HttpLoginService implements LoginService {
  private readonly serviceDomain = "http://localhost:8080";

  async login(loginData: LoginData): Promise<{ user: User; token: string }> {
    const response = await fetch(`${this.serviceDomain}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    return await ResponseHandler.handle(response);
  }
}
