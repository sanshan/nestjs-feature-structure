import { Injectable, Logger } from '@nestjs/common';
import { EmailSenderPort } from '../../../application/ports/email-sender.port';

@Injectable()
export class ConsoleEmailSenderAdaptor implements EmailSenderPort {
  private readonly logger = new Logger(ConsoleEmailSenderAdaptor.name);

  async send(to: string, subject: string, body: string): Promise<void> {
    this.logger.log('📧 Email sent');
    this.logger.log(`To: ${to}`);
    this.logger.log(`Subject: ${subject}`);
    this.logger.log(`Body: ${body}`);

    return Promise.resolve();
  }
}
