import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { inject, injectable } from "inversify";
import { UserFinder } from "../../../contexts/dashboard/user/application/UserFinder";
import { UnknownUserError } from "../../../contexts/dashboard/user/domain/errors/UnknownUserError";
import { User } from "../../../contexts/dashboard/user/domain/User";
import { ExpressController } from "../../_core/controllers/ExpressController";
import { WrongPasswordError } from "../../../contexts/_core/domain/errors/WrongPasswordError";

@injectable()
export class UserLoginController extends ExpressController {
  constructor(@inject(UserFinder) private readonly userFinder: UserFinder) {
    super();
    this.addError(UnknownUserError, httpStatus.NOT_FOUND);
    this.addError(WrongPasswordError, httpStatus.OK);
  }

  protected async run(req: Request, _res: Response) {
    const user = await this.userFinder.findByUsername(req.body.username);

    if (!user.password.matches(req.body.password)) {
      throw new WrongPasswordError(undefined, "Wrong password");
    }

    return this.toResponse(user);
  }

  private toResponse(user: User) {
    return {
      user: { id: user.toPrimitives().id, username: user.toPrimitives().name },
      token: jwt.sign({ userId: user.id.toString() }, process.env.TOKEN_SECRET!, {
        expiresIn: "24h",
      }),
    };
  }
}
