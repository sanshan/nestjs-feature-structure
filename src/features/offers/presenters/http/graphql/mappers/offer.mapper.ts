import { OfferType } from '../dto/offer.type';
import { Offer } from '../../../../domain/aggregates/offer.aggregate';

export class OfferGraphqlMapper {
  static toDto(domain: Offer): OfferType {
    return {
      id: domain.id,
      title: domain.title,
    };
  }
}
