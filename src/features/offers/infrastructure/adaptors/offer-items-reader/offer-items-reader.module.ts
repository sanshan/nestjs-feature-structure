import { Module } from '@nestjs/common';
import { OfferItemsReaderPort } from '../../../application/ports/offer-items-reader.port';
import { MockOfferItemsReaderAdaptor } from './mock-offer-items-reader.adaptor';

@Module({
  providers: [
    {
      provide: OfferItemsReaderPort,
      useClass: MockOfferItemsReaderAdaptor,
    },
  ],
  exports: [OfferItemsReaderPort],
})
export class OfferItemsReaderModule {}
