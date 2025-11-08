import { Offer } from '../aggregates/offer.aggregate';
import { Price } from '../value-objects/price.vo';
import { OfferCreatedEvent } from '../events/offer-created.event';
import { randomUUID } from 'crypto';

export type NewOfferProps = {
  title: string;
  priceCents: number;
};

export class OfferFactory {
  static createNew(props: NewOfferProps): Offer {
    const id = randomUUID();

    const offer = new Offer(id, props.title, Price.of(props.priceCents));

    offer.addDomainEvent(new OfferCreatedEvent(offer.id));

    return offer;
  }

  static rehydrate(data: {
    id: string;
    title: string;
    priceCents: number;
  }): Offer {
    return new Offer(data.id, data.title, Price.of(data.priceCents));
  }
}
