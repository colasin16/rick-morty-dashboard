export class DomainError extends Error {
  constructor(private readonly entityId?: string, message?: string) {
    super();
    this.message = message || this.getFallbackErrorMessage();
  }

  private getFallbackErrorMessage() {
    const errorId = this.constructor.name;
    return `${errorId} ${this.entityId ? "at entity: " + this.entityId : ""}`;
  }
}
