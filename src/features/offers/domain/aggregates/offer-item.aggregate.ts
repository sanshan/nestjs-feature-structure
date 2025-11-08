import { Offer } from './offer.aggregate';

export class OfferItem {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly quantity: number,
    readonly priceMinor: number,
    readonly offerId: Offer['id'],
  ) {}

  total(): number {
    return this.quantity * this.priceMinor;
  }
}
