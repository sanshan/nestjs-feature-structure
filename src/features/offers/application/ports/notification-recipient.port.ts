import { Offer } from '../../domain/aggregates/offer.aggregate';

export abstract class NotificationRecipientPort {
  abstract forOffer(offerId: Offer['id']): Promise<string | null>;
}
