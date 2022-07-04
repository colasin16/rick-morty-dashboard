import "reflect-metadata";
import { AuthenticateUserMiddleware } from "../middleware/AuthenticateUserMiddleware";
import { Container } from "inversify";

export const container = new Container();

// Middleware
container.bind(AuthenticateUserMiddleware).toSelf().inSingletonScope();
