import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DomainEventsPublisher } from './application/events/domain-events.publisher';

@Global()
@Module({
  imports: [CqrsModule],
  providers: [DomainEventsPublisher],
  exports: [DomainEventsPublisher, CqrsModule],
})
export class CoreModule {}
