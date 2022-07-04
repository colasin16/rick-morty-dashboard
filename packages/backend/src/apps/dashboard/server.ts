import * as bodyParser from "body-parser";
import express from "express";
import Router from "express-promise-router";
import * as http from "http";
import cors from "cors";
import { registerRoutes } from "./routes";
import { USER_LOGIN_PATH } from "./routes/user.route";
import { AuthenticateUserMiddleware } from "./middleware/AuthenticateUserMiddleware";
import { container } from "./ioc/installer";
import { ExpressMiddleware } from "../_core/middlewares/ExpressMiddleware";

export class Server {
  private express: express.Express;
  readonly port: string;
  httpServer!: http.Server;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(cors());
    this.express.use(this.unless(USER_LOGIN_PATH, container.get(AuthenticateUserMiddleware)));
    const router = Router();
    this.express.use(router);
    registerRoutes(router);
  }

  async listen(): Promise<void> {
    await new Promise<void>(
      (resolve) => (this.httpServer = this.express.listen(this.port, resolve))
    );
    console.info(
      `App is running at http://localhost:${this.port} in ${this.express.get("env")} mode`
    );
    console.info("  Press CTRL-C to stop\n");
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }

  private unless = (path: string, middleware: ExpressMiddleware) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
      if (path === req.path) {
        return next();
      } else {
        return middleware.prevent(req, res, next);
      }
    };
  };
}
