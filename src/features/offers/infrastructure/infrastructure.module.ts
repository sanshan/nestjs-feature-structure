import { Module } from '@nestjs/common';
import { TypeormOffersModule } from './persistence/typeorm/typeorm-offers.module';
import { EmailSenderModule } from './adaptors/email-sender/email-sender.module';
import { RecipientModule } from './adaptors/recipient/recipient.module';
import { OfferItemsReaderModule } from './adaptors/offer-items-reader/offer-items-reader.module';

@Module({
  imports: [
    TypeormOffersModule,
    EmailSenderModule,
    RecipientModule,
    OfferItemsReaderModule,
  ],
  exports: [
    TypeormOffersModule,
    EmailSenderModule,
    RecipientModule,
    OfferItemsReaderModule,
  ],
})
export class InfrastructureModule {}
