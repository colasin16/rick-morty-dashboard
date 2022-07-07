import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { inject, injectable } from "inversify";
import assert from "assert";
import { UserFinder } from "../../../contexts/dashboard/user/application/UserFinder";
import { UnknownUserError } from "../../../contexts/dashboard/user/domain/errors/UnknownUserError";
import { User } from "../../../contexts/dashboard/user/domain/User";
import { ExpressController } from "../../_core/controllers/ExpressController";
import { WrongPasswordError } from "../../../contexts/_core/domain/errors/WrongPasswordError";
import { CharacterFinder } from "../../../contexts/dashboard/character/application/CharacterFinder";
import { Character } from "../../../contexts/dashboard/character/domain/Character";

@injectable()
export class ListCharactersController extends ExpressController {
  constructor(@inject(CharacterFinder) private readonly characterFinder: CharacterFinder) {
    super();
  }

  protected async run(req: Request, _res: Response) {
    const characters = await this.characterFinder.findManyByPage(req.body.page);

    return this.toResponse(characters);
  }

  private toResponse(characters: Array<Character>) {
    return {
      characters: characters.map((character) => character.toPrimitives()),
    };
  }
}
