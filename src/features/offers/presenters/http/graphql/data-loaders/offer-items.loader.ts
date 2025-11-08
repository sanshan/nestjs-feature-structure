import { Injectable, Scope } from '@nestjs/common';
import { OfferItem } from '../../../../domain/aggregates/offer-item.aggregate';
import { OfferItemsReaderPort } from '../../../../application/ports/offer-items-reader.port';
import DataLoader from 'dataloader';

@Injectable({ scope: Scope.REQUEST })
export class OfferItemsLoader extends DataLoader<string, OfferItem[]> {
  constructor(private readonly reader: OfferItemsReaderPort) {
    super(async (offerIds: readonly string[]) => {
      const items = await this.reader.findByOfferIds(offerIds);

      const grouped = new Map<string, OfferItem[]>();

      for (const id of offerIds) {
        grouped.set(id, []);
      }

      for (const item of items) {
        grouped.get(item.offerId)!.push(item);
      }

      return offerIds.map((id) => grouped.get(id)!);
    });
  }
}
