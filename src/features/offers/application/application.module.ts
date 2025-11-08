import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateOfferHandler } from './commands/create-offer/create-offer.handler';
import { SendOfferCreatedEmailHandler } from './commands/send-offer-created-email/send-offer-created-email.handler';
import { GetOfferHandler } from './queries/get-offer/get-offer.handler';
import { OffersSaga } from './sagas/offers.saga';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  imports: [CqrsModule, InfrastructureModule],
  providers: [
    CreateOfferHandler,
    SendOfferCreatedEmailHandler,
    GetOfferHandler,
    OffersSaga,
  ],
  exports: [
    CreateOfferHandler,
    SendOfferCreatedEmailHandler,
    GetOfferHandler,
    OffersSaga,
  ],
})
export class ApplicationModule {}
