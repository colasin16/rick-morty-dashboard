import jwt from "jsonwebtoken";
import { injectable } from "inversify";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { ExpressMiddleware } from "../../_core/middlewares/ExpressMiddleware";
import { UnauthorizedUserError } from "../../../contexts/dashboard/user/domain/errors/UnauthorizedUserError";

@injectable()
export class AuthenticateUserMiddleware extends ExpressMiddleware {
  constructor() {
    super();
    this.addError(UnauthorizedUserError, httpStatus.UNAUTHORIZED);
  }

  public run(req: Request, _res: Response) {
    const authHeader = req.headers.authorization;
    const token = (authHeader && authHeader.split(" ")[1]) ?? "";

    try {
      jwt.verify(token, process.env.TOKEN_SECRET as string);
    } catch (error) {
      throw new UnauthorizedUserError(undefined, `Unauthorized User: ${error.message}`);
    }
  }
}
