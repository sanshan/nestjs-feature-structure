import { OfferItemsReaderPort } from '../../../application/ports/offer-items-reader.port';
import { OfferItem } from 'src/features/offers/domain/aggregates/offer-item.aggregate';
import { Offer } from 'src/features/offers/domain/aggregates/offer.aggregate';

export class MockOfferItemsReaderAdaptor implements OfferItemsReaderPort {
  async findByOfferIds(
    offerIds: Readonly<Offer['id'][]>,
  ): Promise<OfferItem[]> {
    const result: OfferItem[] = [];

    for (const offerId of offerIds) {
      result.push(
        new OfferItem(`${offerId}-item-1`, 'Mock Item A', 1, 1990, offerId),
        new OfferItem(`${offerId}-item-2`, 'Mock Item B', 2, 2990, offerId),
      );
    }

    return Promise.resolve(result);
  }
}
