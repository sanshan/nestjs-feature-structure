import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { DomainEvent } from '../../domain/events/domain-event';

@Injectable()
export class DomainEventsPublisher {
  constructor(private readonly eventBus: EventBus) {}

  publishAll(events: DomainEvent[]) {
    for (const e of events) {
      this.eventBus.publish(e);
    }
  }
}
