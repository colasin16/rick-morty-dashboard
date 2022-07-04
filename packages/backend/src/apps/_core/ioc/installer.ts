import { Container } from "inversify";
import { MongoClientFactory } from "../../../contexts/_core/infrastructure/persistence/mongo/MongoClientFactory";

const container = new Container();

// Core
container.bind(MongoClientFactory).to(MongoClientFactory).inSingletonScope();

export function getContainer() {
  const child = new Container();
  return Container.merge(child, container);
}
