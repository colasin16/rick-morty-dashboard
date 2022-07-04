import { Uuid } from "../../../_core/domain/Uuid";
import { User } from "./User";

export interface UserRepository {
  add(user: User): Promise<void>;
  find(id: Uuid): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
}
