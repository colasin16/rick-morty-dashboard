import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { CharacterFinder } from "../../../contexts/dashboard/character/application/CharacterFinder";
import { Character } from "../../../contexts/dashboard/character/domain/Character";
import { ExpressController } from "../../_core/controllers/ExpressController";

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
