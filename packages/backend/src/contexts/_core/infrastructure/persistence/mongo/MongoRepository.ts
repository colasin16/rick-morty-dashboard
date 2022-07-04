import { inject, injectable } from "inversify";
import { MongoClient } from "mongodb";
import { globalConfig } from "../../GlobalConfig";
import { MongoClientFactory } from "./MongoClientFactory";

@injectable()
export abstract class MongoRepository {
  constructor(@inject(MongoClientFactory) private clientFactory: MongoClientFactory) {}

  protected abstract moduleName(): string;
  protected abstract collectionName(): string;

  protected async collection() {
    return (await this.client()).db(this.moduleName()).collection(this.collectionName());
  }

  protected client(): Promise<MongoClient> {
    return this.clientFactory.getClient(this.moduleName(), globalConfig.mongo);
  }
}
