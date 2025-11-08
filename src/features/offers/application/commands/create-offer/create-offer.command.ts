import { Command } from '@nestjs/cqrs';
import { Offer } from '../../../domain/aggregates/offer.aggregate';

export class CreateOfferCommand extends Command<Offer> {
  constructor(
    public readonly title: string,
    public readonly priceCents: number,
  ) {
    super();
  }
}
