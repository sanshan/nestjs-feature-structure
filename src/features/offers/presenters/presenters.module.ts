import { Module } from '@nestjs/common';
import { OfferItemsLoader } from './http/graphql/data-loaders/offer-items.loader';
import { OfferResolver } from './http/graphql/resolvers/offer.resolver';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [OfferItemsLoader, OfferResolver],
  exports: [OfferResolver],
})
export class PresentersModule {}
