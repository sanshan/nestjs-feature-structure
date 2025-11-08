import { Query } from '@nestjs/cqrs';
import { Offer } from '../../../domain/aggregates/offer.aggregate';

export class GetOfferQuery extends Query<Offer> {
  constructor(public readonly id: Offer['id']) {
    super();
  }
}
