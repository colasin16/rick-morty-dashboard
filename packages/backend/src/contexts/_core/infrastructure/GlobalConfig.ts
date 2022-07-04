import { MongoConfig } from "./persistence/mongo/MongoConfig";

interface GlobalConfig {
  mongo: MongoConfig;
}
export const globalConfig: GlobalConfig = {
  mongo: {
    url: `mongodb+srv://main-user:${process.env.DB}@cluster0.egclv.mongodb.net/?retryWrites=true&w=majority`,
    connectionTimeoutMs: 1000,
  },
};
