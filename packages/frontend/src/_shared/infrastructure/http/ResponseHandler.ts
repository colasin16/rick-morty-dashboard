export class ResponseHandler {
  static async handle(response: Response) {
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }

    return data;
  }
}
