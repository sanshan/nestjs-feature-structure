import { Module } from '@nestjs/common';
import { EmailSenderPort } from '../../../application/ports/email-sender.port';
import { ConsoleEmailSenderAdaptor } from './console-email-sender.adaptor';

@Module({
  providers: [
    { provide: EmailSenderPort, useClass: ConsoleEmailSenderAdaptor },
  ],
  exports: [EmailSenderPort],
})
export class EmailSenderModule {}
