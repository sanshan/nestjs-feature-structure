import { Command } from '@nestjs/cqrs';
import { Offer } from '../../../domain/aggregates/offer.aggregate';

export class SendOfferCreatedEmailCommand extends Command<void> {
  constructor(
    public readonly offerId: Offer['id'],
    public readonly to: string,
  ) {
    super();
  }
}
