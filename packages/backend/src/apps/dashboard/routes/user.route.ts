import { container } from "../ioc/installer";
import { UserLoginController } from "../controllers/UserLoginController";

export const USER_LOGIN_PATH = "/login";

export const register = (app: any) => {
  const userLoginController = container.get(UserLoginController);
  app.get(USER_LOGIN_PATH, userLoginController.request.bind(userLoginController));
};
