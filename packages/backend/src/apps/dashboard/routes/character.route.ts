import { container } from "../ioc/installer";
import { ListCharactersController } from "../controllers/ListCharactersController";

export const register = (app: any) => {
  const listCharactersController = container.get(ListCharactersController);
  app.get("/characters/:page?", listCharactersController.request.bind(listCharactersController));
};
