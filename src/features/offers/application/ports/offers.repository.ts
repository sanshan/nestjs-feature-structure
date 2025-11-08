import { Offer } from '../../domain/aggregates/offer.aggregate';

export abstract class OffersRepository {
  abstract save(offer: Offer): Promise<Offer>;

  abstract findByIdOrFail(id: string): Promise<Offer>;
}
