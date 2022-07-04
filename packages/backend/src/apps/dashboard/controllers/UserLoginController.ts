import { Request, Response } from "express";
import { injectable } from "inversify";

import { ExpressController } from "../../_core/controllers/ExpressController";

@injectable()
export class UserLoginController extends ExpressController {
  protected run(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
}
