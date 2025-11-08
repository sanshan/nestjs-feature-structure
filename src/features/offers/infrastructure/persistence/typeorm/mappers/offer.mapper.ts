import { Offer } from '../../../../domain/aggregates/offer.aggregate';
import { OfferEntity } from '../entities/offer.entity';
import { OfferFactory } from '../../../../domain/factories/offers.factory';

export class OfferMapper {
  static toDomain(entity: OfferEntity): Offer {
    return OfferFactory.rehydrate({
      id: entity.id,
      title: entity.title,
      priceCents: entity.priceCents,
    });
  }

  static toEntity(domain: Offer): OfferEntity {
    const entity = new OfferEntity();
    entity.id = domain.id;
    entity.title = domain.title;
    entity.priceCents = domain.price.amount;

    return entity;
  }
}
