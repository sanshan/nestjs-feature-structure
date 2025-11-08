import { NotificationRecipientPort } from '../../../application/ports/notification-recipient.port';

export class NotificationRecipientQueryBusAdapter
  implements NotificationRecipientPort
{
  async forOffer(offerId: string): Promise<string | null> {
    return Promise.resolve(`${offerId}@example.com`);
  }
}
