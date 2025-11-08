import { OfferItem } from '../../domain/aggregates/offer-item.aggregate';
import { Offer } from '../../domain/aggregates/offer.aggregate';

export abstract class OfferItemsReaderPort {
  abstract findByOfferIds(
    offerIds: Readonly<Offer['id'][]>,
  ): Promise<OfferItem[]>;
}
