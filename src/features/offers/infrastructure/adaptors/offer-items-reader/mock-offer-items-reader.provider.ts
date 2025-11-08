import { Provider } from '@nestjs/common';
import { OfferItemsReaderPort } from '../../../application/ports/offer-items-reader.port';
import { MockOfferItemsReaderAdaptor } from './mock-offer-items-reader.adaptor';

export const OFFER_ITEMS_READER_PROVIDER: Provider = {
  provide: OfferItemsReaderPort,
  useClass: MockOfferItemsReaderAdaptor,
};
