import "reflect-metadata";
import { types } from "./types";
import { UserFinder } from "../../../contexts/dashboard/user/application/UserFinder";
import { MongoUserRepository } from "../../../contexts/dashboard/user/infrastructure/MongoUserRepository";
import { getContainer } from "../../_core/ioc/installer";
import { UserLoginController } from "../controllers/UserLoginController";
import { AuthenticateUserMiddleware } from "../middleware/AuthenticateUserMiddleware";
import { UserCreator } from "../../../contexts/dashboard/user/application/UserCreator";
import { HttpCharacterRepository } from "../../../contexts/dashboard/character/infrastructure/HttpCharacterRepository";
import { CharacterFinder } from "../../../contexts/dashboard/character/application/CharacterFinder";
import { ListCharactersController } from "../controllers/ListCharactersController";

export const container = getContainer();

// Middleware
container.bind(AuthenticateUserMiddleware).toSelf().inSingletonScope();

// User
container.bind(UserLoginController).toSelf().inSingletonScope();
container.bind(UserFinder).toSelf().inSingletonScope();
container.bind(UserCreator).toSelf().inSingletonScope();
container.bind(types.UserRepository).to(MongoUserRepository).inSingletonScope();

// Character
container.bind(ListCharactersController).toSelf().inSingletonScope();
container.bind(CharacterFinder).toSelf().inSingletonScope();
container.bind(types.CharacterRepository).to(HttpCharacterRepository).inSingletonScope();
