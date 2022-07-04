import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { injectable } from "inversify";
import { DomainError } from "../../../contexts/_core/domain/DomainError";

@injectable()
export abstract class ExpressMiddleware {
  private readonly errors: Map<DomainError, { status: number; message?: string }> = new Map();

  async prevent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.run(req, res);
      next();
    } catch (error) {
      const handledError = this.errors.get(error.constructor);
      if (handledError) {
        res.status(handledError.status).send({ message: handledError.message || error.message });
      } else {
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ message: "There was an error, sorry about that..." });
      }
    }
  }

  protected abstract run(req: Request, res?: Response): void | Promise<void>;

  protected addError(domainError: DomainError, status: number, message?: string) {
    this.errors.set(domainError, { status, message });
  }
}
