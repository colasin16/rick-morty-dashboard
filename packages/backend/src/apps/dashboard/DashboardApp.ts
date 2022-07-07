import "dotenv/config";
import { Server } from "./server";

export class Dashboard {
  private server?: Server;

  async start() {
    const port = process.env.PORT || "8080";
    this.server = new Server(port);
    await this.server.listen();
  }

  async stop() {
    await this.server?.stop();
  }

  get port(): string {
    if (!this.server) {
      throw new Error("Dashboard backend application has not been started");
    }
    return this.server.port;
  }

  get httpServer() {
    return this.server?.httpServer;
  }
}
