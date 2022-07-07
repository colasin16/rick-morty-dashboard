import { User } from "../../../_shared/domain/user/User";
import { LoginData } from "./LoginData";

export interface LoginService {
  login(loginData: LoginData): Promise<{ user: User; token: string }>;
}
