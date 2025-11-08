import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { PresentersModule } from './presenters/presenters.module';

@Module({
  imports: [ApplicationModule, PresentersModule],
})
export class OffersModule {}
