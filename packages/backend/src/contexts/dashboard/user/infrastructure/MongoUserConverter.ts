import { User } from "../domain/User";
import { MongoUser } from "./MongoUser";

export class MongoUserConverter {
  static fromDomain(user: User): MongoUser {
    return { _id: user.id, name: user.name, password: user.password.toString() };
  }

  static toDomain(mongoUser: MongoUser): User {
    return User.fromPrimitives({
      id: mongoUser._id.value,
      name: mongoUser.name,
      password: mongoUser.password,
    });
  }

  static manyFromDomain(users: Array<User>): Array<MongoUser> {
    return users.map((user) => this.fromDomain(user));
  }

  static manyToDomain(mongoUsers: Array<MongoUser>): Array<User> {
    return mongoUsers.map((mongoUser: MongoUser) => this.toDomain(mongoUser));
  }
}
