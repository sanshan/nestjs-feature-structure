import { Price } from '../value-objects/price.vo';
import { DomainEvent } from '../../../../common/domain/events/domain-event';

export class Offer {
  private domainEvents: DomainEvent[] = [];

  constructor(
    public readonly id: string,
    public title: string,
    public price: Price,
  ) {}

  changeTitle(newTitle: string) {
    if (!newTitle?.trim()) {
      throw new Error('Title cannot be empty');
    }

    this.title = newTitle.trim();
  }

  addDomainEvent(event: DomainEvent) {
    this.domainEvents.push(event);
  }

  pullDomainEvents(): DomainEvent[] {
    const events = [...this.domainEvents];
    this.domainEvents = [];

    return events;
  }

  getDomainEvents() {
    return this.domainEvents;
  }
}
