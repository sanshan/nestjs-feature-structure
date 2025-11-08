import { Module } from '@nestjs/common';
import { NotificationRecipientPort } from '../../../application/ports/notification-recipient.port';
import { NotificationRecipientQueryBusAdapter } from './mock-recipient.adapter';

@Module({
  providers: [
    {
      provide: NotificationRecipientPort,
      useClass: NotificationRecipientQueryBusAdapter,
    },
  ],
  exports: [NotificationRecipientPort],
})
export class RecipientModule {}
