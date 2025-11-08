export interface DomainEvent<T extends string = string> {
  readonly type: T;
  readonly occurredAt: Date;
}
