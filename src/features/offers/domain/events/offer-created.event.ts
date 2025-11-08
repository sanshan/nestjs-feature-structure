import { DomainEvent } from '../../../../common/domain/events/domain-event';
import { Offer } from '../aggregates/offer.aggregate';

export class OfferCreatedEvent implements DomainEvent<'OfferCreatedEvent'> {
  readonly type = 'OfferCreatedEvent';
  readonly occurredAt = new Date();

  constructor(public readonly offerId: Offer['id']) {}
}
