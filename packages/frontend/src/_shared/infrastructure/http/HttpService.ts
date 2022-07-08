import { ResponseHandler } from "./ResponseHandler";

export class HttpService {
  protected readonly jwt_token = localStorage.getItem("token") ?? "";

  protected async fetch(url: string, options: RequestInit = {}) {
    const requestOptions = Object.assign(options, {
      headers: { Authorization: `Bearer ${this.jwt_token}` },
    });

    const response = await fetch(url, requestOptions);
    return await ResponseHandler.handle(response);
  }
}
