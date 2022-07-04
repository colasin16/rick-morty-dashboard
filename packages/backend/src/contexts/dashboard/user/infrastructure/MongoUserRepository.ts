import { injectable } from "inversify";
import { Uuid } from "../../../_core/domain/Uuid";
import { MongoRepository } from "../../../_core/infrastructure/persistence/mongo/MongoRepository";
import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { MongoUser } from "./MongoUser";
import { MongoUserConverter } from "./MongoUserConverter";

@injectable()
export class MongoUserRepository extends MongoRepository implements UserRepository {
  protected moduleName(): string {
    return "dashboard";
  }
  protected collectionName(): string {
    return "users";
  }

  async add(user: User): Promise<void> {
    const document = MongoUserConverter.fromDomain(user);
    const collection = await this.collection();
    await collection.updateOne({ _id: document._id }, { $set: document }, { upsert: true });
  }

  async find(id: Uuid): Promise<User | null> {
    const collection = await this.collection();
    return (await collection.findOne({ _id: id })) as User | null;
  }

  async findByUsername(username: string): Promise<User | null> {
    const collection = await this.collection();

    const document = (await collection.findOne({ name: username })) as MongoUser | null;

    return document ? MongoUserConverter.toDomain(document) : null;
  }
}
