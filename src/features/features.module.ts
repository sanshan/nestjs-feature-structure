import { Module } from '@nestjs/common';
import { CoreModule } from '../common/core.module';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [CoreModule, OffersModule],
  providers: [],
})
export class FeaturesModule {}
